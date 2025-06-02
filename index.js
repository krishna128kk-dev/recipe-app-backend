const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const recipeRoutes = require('./routes/recipeRoutes'); // 🔹 Import the recipe routes
app.use('/api/recipes', recipeRoutes); // 🔹 Use the recipe routes

// Test route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// MongoDB Connection & Server Start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
