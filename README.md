# Grecian API and database

## Description
A full-stack web application for exploring Greek mythology, featuring a React frontend and a FastAPI backend connected to a PostgreSQL database. The project focuses on backend development, including custom database schema design, API architecture, and efficient data querying.

## Features
- Search for Greek gods, heroes, and mythological figures
- Custom-designed PostgreSQL database schema
- Fast and efficient API built with FastAPI
- RESTful endpoints for structured data access
- Detailed information retrieval for each entity
- Lightweight React frontend for interaction

## Tech Stack
### Frontend
React (with Vite)
JavaScript (ES6+)
CSS
### Backend
Python
FastAPI
PostgreSQL
### Other
REST API architecture

## How It Works
- User enters a search query in the React frontend
- The frontend sends a request to the FastAPI backend
- The backend queries the PostgreSQL database
- Results are returned as JSON
- The frontend displays the data to the user

Also available is a feature box which showcases a selected entity. Users can click “lucky Dip” to be shown a random entity.

## Installation
Clone the repository
https://github.com/simonholt256/GreekMyth

### Backend Setup (FastAPI)
Navigate to the backend folder:
```
cd backend
```
Create a virtual environment:
```
python -m venv venv
```
Activate it:__
Mac/Linux:
```
source venv/bin/activate
```
Windows:
```
venv\Scripts\activate
```
Install dependencies:
```
pip install -r requirements.txt
```
Go into mythdata folder
```
cd mythdata
```
Run the server:
```
python -m uvicorn main:app

```
### Frontend Setup (React)
Open a new terminal and navigate to frontend:
```
cd frontend
```
Install dependencies:
```
npm install
```
Navigate to mythaccess folder
```
Cd mythaccess
```
Start the development server:
```
npm run dev
```
Open:
http://localhost:5173

## API Example
Request
```
GET /entities/search?q=zeus
```
Response type
A JSON array of Entity objects
```
[
{ ...entity... },
{ ...entity... }
] 
```
Example response 
```
[
 {
   "id": 1,
   "name": "Zeus",
   "division": "Olympians",
   "category": "God",
   "description": "King of the gods",
   "notes": null
 }
]
```

## Demo
(Add screenshots and videos here)

## Future Improvements
Add filtering by category (gods, titans, heroes)
Add images and richer descriptions
Implement authentication for admin data entry
Deploy backend and database
Improve frontend UI/UX
