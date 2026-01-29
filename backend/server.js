const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const http = require('http');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (process.env.MONGODB_URI) {
  console.log('.env file loaded successfully');
} else {
  console.error('Error: MONGODB_URI is not set in .env file');
  console.error('Make sure .env file exists in:', __dirname);
  console.error('.env file should contain: MONGODB_URI=your_connection_string');
  process.exit(1);
}

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
    console.log(`Database: ${mongoose.connection.name}`);
  })
  .catch((error) => {
    console.error('MongoDB Atlas connection error:');
    console.error('Error message:', error.message);
    if (error.name === 'MongoServerSelectionError') {
      console.error('Tip: Make sure your IP address is whitelisted in MongoDB Atlas Network Access');
    }
    if (error.name === 'MongoAuthenticationError') {
      console.error('Tip: Check your username and password in the connection string');
    }
    console.log('Server will continue running, but database operations will fail');
  });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB Atlas');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  console.log(`${req.method} ${pathname}`);

  if (req.method === 'GET' && pathname === '/api/menu') {
    MenuItem.find()
      .then((items) => {
        res.writeHead(200);
        res.end(JSON.stringify({
          success: true,
          data: items
        }));
      })
      .catch((error) => {
        res.writeHead(500);
        res.end(JSON.stringify({
          success: false,
          error: error.message
        }));
      });
  } 
  else if (req.method === 'GET' && pathname === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      message: 'Whisk & Wonder API Server',
      endpoints: {
        'GET /api/menu': 'Get all menu items'
      }
    }));
  }
  else if (req.method === 'GET' && pathname === '/api') {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      message: 'API endpoints',
      endpoints: {
        'GET /api/menu': 'Get all menu items'
      }
    }));
  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({
      success: false,
      message: 'Route not found',
      requestedPath: pathname,
      availableEndpoints: ['GET /api/menu', 'GET /', 'GET /api']
    }));
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
