// server/routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST: Save a recipe
router.post('/', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const saved = await newRecipe.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to save recipe', error: err });
  }
});

// GET: Get all saved recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch recipes', error: err });
  }
});

module.exports = router;
