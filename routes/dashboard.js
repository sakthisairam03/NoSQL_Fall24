const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

// Render the dashboard page
router.get('/', async (req, res) => {
  // Fetch the exercises for the current user (for simplicity, fetching all)
  const exercises = await Exercise.find();

  // Calculate total calories and body fat reduction
  let totalCalories = 0;
  let totalBodyFatReduction = 0;

  exercises.forEach(exercise => {
    totalCalories += exercise.caloriesBurnt;
    totalBodyFatReduction += exercise.bodyFatReduction;
  });

  // Render the dashboard with the fetched data
  res.render('dashboard', {
    exercises,
    totalCalories,
    totalBodyFatReduction,
    workoutStreak: exercises.length // Simplified workout streak based on exercise entries
  });
});

module.exports = router;
