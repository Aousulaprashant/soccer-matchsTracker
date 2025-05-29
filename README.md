# Soccer Matches Tracker

[Frontend Live Site](https://soccer-matchs-tracker-vuas.vercel.app/)  
[Backend API](https://soccer-matchs-tracker.vercel.app/)

---

## Project Overview

This project tracks soccer matches, providing users with up-to-date match information. It consists of:

- **Frontend:** React-based user interface deployed on Vercel.
- **Backend:** Express.js REST API deployed as serverless functions on Vercel.

## Note 
Due to the lack of free public APIs for real-time upcoming match data, I’ve used the 2023–2024 season matches and displayed them as 'upcoming' for demo purposes. If premium access is provided, I can easily integrate live upcoming match data
---

## Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [Deployment](#deployment)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)

---

## Features

- Live soccer match data tracking  
- REST API backend with Express  
- Secure with Helmet and CORS middleware  
- Deployed on Vercel as serverless backend and frontend

---

## Technologies

- React  
- Express.js  
- Node.js  
- Vercel (Frontend and Backend Hosting)  
- serverless-http for backend deployment  
- Helmet, CORS for security

---

## Getting Started

### Prerequisites

- Node.js installed  
- Git installed

### Clone the repositories

```bash
# Frontend
git clone https://github.com/yourusername/soccer-matchs-tracker-frontend.git

# Backend
git clone https://github.com/yourusername/soccer-matchs-tracker-backend.git
```

Backend Setup
Navigate to backend directory:
```
cd soccer-matchs-tracker-backend
```
Install dependencies:

```
npm install
```
Create .env file with your environment variables (see Environment Variables)

Run locally:
```
npm start
```
The backend runs on http://localhost:5000 by default.

Frontend Setup
Navigate to frontend directory:
```
cd soccer-matchs-tracker-frontend
```
Install dependencies:

```
npm install
```

Run locally:
```
npm start
```
## Deployment 
### Backend
- Hosted on Vercel as serverless functions: https://soccer-matchs-tracker.vercel.app/

- Vercel automatically builds and deploys from GitHub repo.

- Environment variables configured in Vercel dashboard.

### Frontend
- Hosted on Vercel: https://soccer-matchs-tracker-vuas.vercel.app/

- Built with React, automatically deployed on git push.


API Endpoints
Endpoint	Method	Description
/api/schedule	GET	Get soccer match schedules

## API: Get Upcoming Soccer Matches

### Description

This API endpoint fetches upcoming soccer matches from the **API-Football** service and returns a cleaned, formatted JSON response with relevant match details.

### How It Works

- Uses the API key stored in the `.env` file (`API_KEY`) to authenticate requests.
- Sends a GET request to the API-Football endpoint:
```
https://v3.football.api-sports.io/fixtures
```
- Requests matches from the English Premier League (`league: 39`) for the 2023 season.
- Filters fixtures within a specified date range (`from` and `to`).
- Processes the API response to extract:
- Fixture ID
- Match date and time
- Venue name
- Referee name (or "N/A" if unavailable)
- League round
- Home and away team names and logos
- Match status (e.g., scheduled, live, finished)

### Example Response

```json
[
{
  "fixtureId": 123456,
  "date": "2023-09-15T16:30:00+00:00",
  "venue": "Old Trafford",
  "referee": "Mike Dean",
  "round": "Regular Season - 5",
  "homeTeam": {
    "name": "Manchester United",
    "logo": "https://..."
  },
  "awayTeam": {
    "name": "Liverpool",
    "logo": "https://..."
  },
  "status": "NS"
},
...
]
```
