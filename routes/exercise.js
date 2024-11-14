const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

// Map each specific exercise to its corresponding video path
const videoMap = {
  "jogging": "/videos/jogging.mp4",
  "walking":"/videos/walking.mp4",
  "dancing":"/videos/dancing.mp4",
  "swimming":"/videos/swimming.mp4",
  "trekking":"/videos/trekking.mp4",
  "yardwork":"/videos/yardwork.mp4",
  "playing":"/videos/playing.mp4",
  "zumba":"/videos/zumba.mp4",
  "cycling":"/videos/cycling.mp4",
  "weight_lifting":"/videos/weightlifting.mp4",
  "push_pull_up":"/videos/push_pull_up.mp4",
  "sprinting":"/videos/sprinting.mp4",
  "gymnasium_exercise":"/videos/gymnasium_exercise.mp4",
  "meditation":"/videos/meditation.mp4",
  "single_leg_stand":"/videos/single_leg_stand.mp4",
  "balance_board":"/videos/balance_board",
  "tai_chi_movements":"/videos/tai_chi_movements.mp4",
  "stretching": "/videos/stretching.mp4",
  "yoga": "/videos/yoga.mp4",
  "tai_chi": "/videos/tai_chi.mp4",
};

// Render the exercise logging page
router.get('/', (req, res) => {
  res.render('exercise', { videoPath: null, selectedExercise: null });
});

// Handle exercise logging form submission
router.post('/log', async (req, res) => {
  const { exerciseType, specificExercise, durationHours, durationMinutes, sets, reps } = req.body;

  // Logic to calculate calories burnt and body fat reduction (based on provided data)
  let caloriesBurnt = 0;
  let bodyFatReduction = 0;

  // Example logic for calculating calories (this could be expanded with more cases)
  if (specificExercise === 'jogging') {
    caloriesBurnt = 750 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.75 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'walking') {
    caloriesBurnt = 200 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.5 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'dancing') {
    caloriesBurnt = 500 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.5 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'swimming') {
    caloriesBurnt = 750 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 1.00 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'trekking') {
    caloriesBurnt = 800 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 1.25 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'yarkwork') {
    caloriesBurnt = 500 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 1.00 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'playing') {
    caloriesBurnt = 500 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.8 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'zumba') {
    caloriesBurnt = 700 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 1.00 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'cycling') {
    caloriesBurnt = 750 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.9 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'weight_lifting') {
    caloriesBurnt = 200 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 1.00 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'push_pull_up') {
    caloriesBurnt = 50 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.4 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'sprinting') {
    caloriesBurnt = 1000 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 1.5 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'gymnasium_exercise') {
    caloriesBurnt = 700 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 1.1 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'meditation') {
    caloriesBurnt = 40 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.3 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'single_leg_stand') {
    caloriesBurnt = 15 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'tai_chi_movements') {
    caloriesBurnt = 200 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.5 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'balance_board') {
    caloriesBurnt = 150 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.3 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'stretching') {
    caloriesBurnt = 40 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'yoga') {
    caloriesBurnt = 300 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.6 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }if (specificExercise === 'tai_chi') {
    caloriesBurnt = 400 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
    bodyFatReduction = 0.8 * (parseInt(durationHours) + parseInt(durationMinutes) / 60);
  }

  // Create a new exercise log
  const newExercise = new Exercise({
    exerciseType,
    specificExercise,
    duration: { hours: durationHours, minutes: durationMinutes },
    sets: sets || 0,
    reps: reps || 0,
    caloriesBurnt,
    bodyFatReduction,
  });

  await newExercise.save();
  // Get the video path based on the specific exercise selected
  const videoPath = videoMap[specificExercise.toLowerCase().replace(/\s+/g, '')] || null;

  // Render the exercise page with the selected video
  res.render('exercise', { videoPath, selectedExercise: specificExercise });
  //res.redirect('/dashboard'); // After logging exercise, redirect to dashboard
});

module.exports = router;
