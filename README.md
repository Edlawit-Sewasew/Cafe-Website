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
├── frontend/              # React application
│   ├── public/           # Static assets
│   │   ├── images/       # Logo and background images
│   │   └── index.html    # HTML template
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── AboutUs.js
│   │   │   └── Contact.js
│   │   ├── utils/        # Utility functions
│   │   │   └── menuToggle.js
│   │   ├── App.js        # Main app with routing
│   │   ├── index.js      # Entry point
│   │   └── style.css     # All styles
│   └── package.json      # Frontend dependencies
│
├── backend/              # Node.js server
│   ├── server.js        # Main server file
│   ├── package.json     # Backend dependencies
│   └── .env             # Environment variables (create this)
│
└── README.md            # This file
```

## Technologies Used

### Frontend
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

3. Start development server:
   ```bash
   npm start
   ```
   or
   ```bash
   npm run dev
   ```

4. Open browser at `http://localhost:3000`

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file in backend folder:
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

5. Start the server:
   ```bash
   npm start
   ```

6. Server runs on `http://localhost:3001`

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
npm start
```

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

## Notes for Submission

- Frontend runs on port 3000
- Backend runs on port 3001
- MongoDB Atlas connection required for backend
- `.env` file must be created in backend folder
- All images are in `frontend/public/images/`
- No authentication implemented (as per requirements)
- Simple, beginner-friendly code structure

## Author

Student Web Development Project

## License

Educational Project
