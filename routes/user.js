// routes/user.js
const express = require('express');
const router = express.Router();

let users = []; // In-memory user storage

// Register User
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    users.push({ username, password });
    res.status(201).json({ message: 'User  registered successfully.' });
});

module.exports = router;