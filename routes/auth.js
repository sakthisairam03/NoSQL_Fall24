const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Render the sign-up page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Handle the sign-up form submission
router.post('/signup', async (req, res) => {
  const { name, gender, age, email, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.render('signup', { error: 'Passwords do not match!' });
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.render('signup', { error: 'Email is already registered!' });
  }

  // Hash the password and save the new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    gender,
    age,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  res.redirect('/auth/login'); // Redirect to login after successful signup
});

// Render the login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle the login form submission
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.render('login', { error: 'Invalid email or password!' });
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render('login', { error: 'Invalid email or password!' });
  }

  // If login is successful, redirect to the exercise page
  // If you are using sessions, you would set them here
  res.redirect('/exercise');
});

// Handle the logout functionality
router.get('/logout', (req, res) => {
  // Clear any session or cookies here if you're using them
  res.redirect('/'); // Redirect to the home page after logout
});

module.exports = router;
