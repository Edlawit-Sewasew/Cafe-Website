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

const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  res.setHeader('Content-Type', 'application/json');

  console.log(`${req.method} ${pathname}`);

  if (req.method === 'POST' && pathname === '/api/contact') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try {
        const { name, email, message } = JSON.parse(body || '{}');
        if (!name || !email || !message) {
          res.writeHead(400);
          res.end(JSON.stringify({ success: false, error: 'Name, email, and message are required' }));
          return;
        }
        ContactSubmission.create({
          name: name.trim(),
          email: email.trim(),
          message: message.trim()
        })
          .then(() => {
            res.writeHead(201);
            res.end(JSON.stringify({ success: true, message: 'Thank you! Your message has been received.' }));
          })
          .catch((err) => {
            res.writeHead(500);
            res.end(JSON.stringify({ success: false, error: err.message }));
          });
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON body' }));
      }
    });
    return;
  }
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
        'GET /api/menu': 'Get all menu items',
        'POST /api/contact': 'Submit contact form'
      }
    }));
  }
  else if (req.method === 'GET' && pathname === '/api') {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      message: 'API endpoints',
      endpoints: {
        'GET /api/menu': 'Get all menu items',
        'POST /api/contact': 'Submit contact form'
      }
    }));
  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({
      success: false,
      message: 'Route not found',
      requestedPath: pathname,
      availableEndpoints: ['GET /api/menu', 'POST /api/contact', 'GET /', 'GET /api']
    }));
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
