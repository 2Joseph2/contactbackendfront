const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authSchema = require('../model/user'); // Import user schema/model
const { registerValidation, loginValidation, validation } = require('../middleware/RegistorValidator'); // Import validation middleware
const { isAuth } = require('../middleware/isAuth'); // Import authentication middleware

const authRoute = express.Router();

// Register Route
// POST: http://localhost:4000/auth/register
authRoute.post('/register', registerValidation, validation, async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await authSchema.findOne({ email });
        if (existingUser) {
            return res.status(404).json({ msg: "User already registered. Please login." });
        }

        // Create a new user
        const newUser = new authSchema({ name, email, password });
        const salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync(password, salt);

        // Save the user
        await newUser.save();
        res.status(200).json({ msg: "User registered successfully", user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

// Login Route
// POST: http://localhost:4000/auth/login
authRoute.post('/login', loginValidation, validation, async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await authSchema.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found. Please register." });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ msg: "Incorrect password" });
        }

        // Generate JWT
        const payload = { id: user._id };
        const token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' });

        res.status(200).json({ msg: "Login successful", token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

// Protected Route (Account Information)
// GET: http://localhost:4000/auth/account
authRoute.get('/account', isAuth, async (req, res) => {
    try {
        // The `isAuth` middleware attaches `user` to the request object
        res.status(200).json(req.user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = authRoute;
