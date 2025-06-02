// server/models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  ingredients: [String],
  instructions: String,
  image: String,
  sourceUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
