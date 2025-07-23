# Movie Search - Backend Case Study for DEPT

A fast, full-stack movie search app built as part of the DEPT Backend Internship Assessment.

This project showcases backend API integration, caching, error handling, and just enough UI magic to show the full picture — all built with **Node.js**, **TypeScript**, and the **OMDb API**.


## Features
### Search Functionality
- `/search?query=movie name` - fetches movies from the OMDb based on 'movie name'.
- returns movie title, year, imdbID, type and poster.

### Movie Details
- `/movie/:imdbID` - retrieves full details of the movie such as genre, director, actors, plot, runtime, etc.

### Recently Searched Items
- `/recent` - returns a list of the last 5 movies searched.

### In-Memory Caching
- Results and details are cached per query to reduce API calls and improve speed.

### Frontend
- Basic, clean, responsive HTML + CSS + JS UI


## Why this Tech Stack?
### Node.js + Express — Fast and Practical
I chose Node.js with Express mainly out of curiosity, as I hadn’t used it before — but it turned out to be a great fit. It’s widely used, minimal, flexible, and let me quickly build scalable, organized APIs for the assignment.

### TypeScript — Familiar and Reliable
TypeScript makes development smoother. It helped catch bugs early, made handling API responses safer, and improved maintainability — even for a small project like this.

### OMDb API — Simple and Developer-Friendly
I explored other options, but OMDb stood out. It’s free to use, doesn’t require complex setup, and offers up to 1000 requests per day — more than enough for this scope.

### In-Memory Caching — Simple and Effective
For a small app, in-memory caching works well — it’s fast, and easy to implement. If this were a production system, I’d likely switch to Redis and cache invalidation.

### Plain HTML/CSS + Vanilla JS — Functional and Focused
Since the brief emphasized backend logic, I intentionally skipped frontend frameworks to keep things light. Still, I added small touches like autocomplete and modal views to keep the user experience smooth and polished.


My intention with this project was to focus on the backend logic, deliver valuable functionality and avoid overengineering.

However, if this were a real production app, I would consider, redis based caching, structured logging and monitoring, proper authentication and frontend framework (like next.js).


## Setup & Run Locally
### 1. Clone the project
```
git clone <https>
cd project_name
```

### 2. Install dependencies
```
npm install express axios dotenv
```

### 3. Add your .env
Create a .env file:
```
OMDB_API_KEY = your_api_key_here
```

### 4. Run the dev server
```
npm run dev
```
The site should be running in http://localhost:3000 now.

---

## 📚 References

- [OMDb API Documentation](https://www.omdbapi.com/)
- [Express.js Documentation](https://expressjs.com/en/guide/routing.html)
- [Axios GitHub Repository](https://axios-http.com/docs/intro)
- [TypeScript Handbook](https://nodejs.org/en/learn/typescript/introduction)
