const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  exerciseType: { type: String, required: true },
  specificExercise: { type: String, required: true },
  duration: {
    hours: { type: Number },
    minutes: { type: Number }
  },
  sets: { type: Number },
  reps: { type: Number },
  caloriesBurnt: { type: Number },
  bodyFatReduction: { type: Number },
  date: { type: Date, default: Date.now }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise;
