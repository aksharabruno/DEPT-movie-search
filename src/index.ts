import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;
const CACHE: Record<string, any> = {};  //is there a better way to implement cache?


// Static frontend- will add later
app.use(express.static(path.join(__dirname, '../public')));

//health check endpoint
app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

//search query endpoint
app.get('/search', async(req: Request, res: Response) => { 
    console.log(req.query)
    const query = req.query.query as string;
    if (!query) return res.status(400).json({ error: 'Missing query' });

    if (CACHE[query]) {
        return res.json({source:'cache', results: CACHE[query]});
    }

    try {
        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                s: query,
                apikey: OMDB_API_KEY
            }
        });

        const data = response.data;
        if (data.Response === 'False') { 
            return res.status(404).json({error: data.Error});
        }

        const results = data.Search.map((movie: any) => ({
            title: movie.Title,
            year: movie.Year,
            imdbID: movie.imdbID,
            type: movie.Type,
            poster: movie.Poster
        }))

        CACHE[query] = results; 
        res.json({source: 'api', results});
    } catch (error) {
        console.error('Error fetching data from OMDB API:', error);
        return res.status(500).json({ error: 'Failed to fetch data' });
    } 
});

//movie details endpoint
app.get('/movie/:imdbID', async (req: Request, res: Response) => {
    const imdbID = req.params.imdbID;

    if(CACHE[imdbID]) {
        return res.json({source: 'cache', movie: CACHE[imdbID]});
    }
    try {
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                i: imdbID,
                apiKey: OMDB_API_KEY,
                plot: 'full'
            }
        })

        const data = response.data;
        if (data.Response === 'False') {
            return res.status(404).json({ error: data.Error });
        }

        CACHE[imdbID] = data; 
        res.json({source: 'api', movie: data});
    } catch (error) {
        console.error('Error fetching movie details from OMDB API:', error);
        return res.status(500).json({ error: 'Failed to fetch movie details' });
    }

    console.log('cache:', CACHE);
});

//start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});