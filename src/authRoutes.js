const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });

    try {
        await user.save();
        res.status(201).send('User created');
    } catch (err) {
        res.status(400).send('Error creating user');
    }
});

// Sign In
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).send('Invalid password');
    }

    res.send('Sign in successful');
});

// Get Users (Admin Dashboard)
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;

