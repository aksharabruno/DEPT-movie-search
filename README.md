# DEPT-movie-search - Backend Case Study

A simple website to search for movie details, built for the DEPT backend internship assessment.

This project demonstrates backend API integration, simple caching, error handling and a clean code design. 

---

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

---

## Why this Tech Stack?
### Node.js + Express - Fast and Practical
I chose Node.js with Express (purely out of curiosity because it is new for me), but it did allow me to quickly build scalable APIs using tools that are widely used in the industry. Express was minimal and flexible, seemed perfect for this assignment.

### TypeScript - Familiar
TypeScript makes lives easier. It helped me catch bugs early, made API responses easier to manage, and made the codebase more maintainable. It really improves readability and reduces friction.

### OMDb API - Developer-friendly
Out of the available APIs, OMDb stood out because it was free to use and did not require many details to sign up. It offers upto 1000 requests per day, which was good enough considering the scope of this project. It was simple and easy to integrate.

### In-memory Caching - Simple and Effective
In-memory caching was ideal for this project. However, for a larger-scale project, I would probably prefer Redis to cache to improve the performance.

### Plain HTML/CSS + Vanilla JS - Functional
Since the brief asked to focus on the backend functionality, I intentionally avoided frontend frameworks to keep the project lightweight. To have a smoother user experience, I added small enhancements like modal view and a dark theme.

My intention with this project was to focus on the backend logic, deliver valuable functionality and avoid overengineering.

However, if this were a real production app, I would consider, redis based caching, structured logging and monitoring, proper authentication and frontend framework (like next.js).

---

## Setup & Run Locally
### 1. Clone the project
```
git clone <ssh>
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