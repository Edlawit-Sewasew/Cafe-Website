/**
 * Seed script: populates MongoDB with sample menu items for demo.
 * Run after backend is set up: npm run seed
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI not set in .env');
  process.exit(1);
}

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }
});
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

const sampleMenuItems = [
  { name: 'Tiramisu', price: 200, category: 'Desserts' },
  { name: 'Croissant', price: 150, category: 'Desserts' },
  { name: 'Opera Cake', price: 200, category: 'Desserts' },
  { name: 'Oreo Cheesecake', price: 350, category: 'Desserts' },
  { name: 'Latte', price: 160, category: 'Hot' },
  { name: 'Cappuccino', price: 180, category: 'Hot' },
  { name: 'Cold Brew', price: 150, category: 'Cold' },
  { name: 'Iced Latte', price: 190, category: 'Iced' }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(sampleMenuItems);
    console.log('Seed complete: sample menu items added to database.');
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
