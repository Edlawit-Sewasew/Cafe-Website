# Whisk & Wonder - Cafe Website

A full-stack web application for Whisk & Wonder patisserie and bakery, built with React frontend and Node.js backend with MongoDB Atlas.

## Project Overview

This project demonstrates a complete web development workflow:
- **Frontend**: React application with routing and interactive components
- **Backend**: Node.js server with MongoDB Atlas database integration
- **Features**: Contact form validation, menu display, responsive design

## Project Structure

```
Cafe-Website/
├── frontend/              # React + Vite application
│   ├── index.html        # HTML entry (Vite)
│   ├── vite.config.js    # Vite config (port 5173, no auto-open)
│   ├── public/           # Static assets
│   │   └── images/       # Logo and background images
│   ├── src/
│   │   ├── components/   # React components (.jsx)
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   └── Contact.jsx
│   │   ├── utils/        # Utility functions
│   │   │   └── menuToggle.js
│   │   ├── App.jsx       # Main app with routing
│   │   ├── main.jsx      # Entry point
│   │   └── style.css     # All styles
│   └── package.json      # Frontend dependencies
│
├── backend/              # Node.js server
│   ├── server.js        # Main server file
│   ├── seed.js          # Seed script for demo data (npm run seed)
│   ├── package.json     # Backend dependencies
│   ├── .env.example     # Template for environment variables
│   └── .env             # Environment variables (create from .env.example)
│
└── README.md            # This file
```

## Technologies Used

### Frontend
- Vite 5.x (build tool & dev server)
- React 18.2.0
- React Router DOM 6.8.0
- CSS3 (Responsive Design)

### Backend
- Node.js (Native HTTP module)
- MongoDB Atlas (Cloud Database)
- Mongoose 7.5.0
- dotenv 16.3.1

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB Atlas account (free tier available)
- npm or yarn package manager

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server (Vite):
   ```bash
   npm run dev
   ```
   You should see something like:
   ```
   VITE v5.x.x  ready in XXX ms
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

4. Open your browser and go to **http://localhost:5173/** (the page does not open automatically).

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file in backend folder (copy from `.env.example` and fill in your values):
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cafe-website?retryWrites=true&w=majority
   PORT=3001
   ```

4. Get MongoDB Atlas connection string:
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Add your IP address in Network Access settings

5. (Optional) Seed sample menu data for the demo:
   ```bash
   npm run seed
   ```

6. Start the server:
   ```bash
   npm start
   ```

7. Server runs on `http://localhost:3001`

## Features Implemented

### Frontend Features
- React Router for page navigation
- useState hook example (Contact page toggle)
- Responsive navigation with mobile menu toggle
- Contact form with JavaScript validation
- Reusable Header and Footer components
- All original CSS styles preserved

### Backend Features
- Node.js HTTP server (no framework)
- MongoDB Atlas connection
- Mongoose schema for menu items
- RESTful API endpoint (GET /api/menu)
- CORS enabled for frontend access
- Environment variable configuration

## API Endpoints

- `GET /` - Server information
- `GET /api` - API endpoints list
- `GET /api/menu` - Get all menu items from database

## Routes (Frontend)

- `/` - Home page
- `/menu` - Menu page
- `/about` - About Us page
- `/contact` - Contact page

## Database Schema

**MenuItem Collection:**
```javascript
{
  name: String (required),
  price: Number (required),
  category: String (required)
}
```

## Running the Complete Application

### Terminal 1 - Frontend:
```bash
cd frontend
npm run dev
```
Then open **http://localhost:5173/** in your browser.

### Terminal 2 - Backend:
```bash
cd backend
npm start
```

## Project Highlights

1. **Progressive Development**: Started with static HTML, converted to React components
2. **Clean Code**: Minimal comments, readable structure
3. **Modern Stack**: React, Node.js, MongoDB Atlas
4. **Best Practices**: Environment variables, proper file structure
5. **User Experience**: Responsive design, form validation, interactive elements

## File Organization

- All React components in `frontend/src/components/`
- Utility functions in `frontend/src/utils/`
- Styles consolidated in `frontend/src/style.css`
- Backend server in `backend/server.js`
- Environment configuration in `backend/.env`

## Before You Demo (Demo Checklist)

1. **Setup**
   - Copy `backend/.env.example` to `backend/.env` and add your MongoDB Atlas connection string and `PORT=3001`.
   - In `backend`: run `npm install` then `npm run seed` to add sample menu data.
   - In `frontend`: run `npm install` then `npm start`.

2. **Run both servers**
   - Terminal 1: `cd backend` → `npm start` (runs on port 3001).
   - Terminal 2: `cd frontend` → `npm run dev` (Vite runs on port 5173). Open **http://localhost:5173/** in your browser.

3. **What to show**
   - **Home**: Hero, navigation, footer.
   - **Menu**: “Today’s Specials (from our menu database)” section shows data from the backend API; full menu below.
   - **Contact**: Form validation and the “Show/Hide Additional Info” toggle (useState).
   - **About**: About Us content.
   - **Backend**: Open `http://localhost:3001/api/menu` to show the API response.

## Notes for Submission

- Frontend runs on port **5173** (Vite dev server)
- Backend runs on port 3001
- MongoDB Atlas connection required for backend
- `.env` file must be created in backend folder (use `backend/.env.example` as a template)
- Run `npm run seed` in backend to pre-populate menu data for the demo
- All images are in `frontend/public/images/`
- No authentication implemented (as per requirements)
- Simple, beginner-friendly code structure

## Author

Student Web Development Project

## License

Educational Project
