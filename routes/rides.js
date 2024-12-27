// routes/rides.js
const express = require('express');
const router = express.Router();
const rides = require('../mockData/rides');

// List Rides
router.get('/', (req, res) => {
    res.json(rides);
});

// Ride Details
router.get('/:id', (req, res) => {
    const rideId = parseInt(req.params.id);
    const ride = rides.find(r => r.id === rideId);
    if (!ride) {
        return res.status(404).json({ message: 'Ride not found.' });
    }
    res.json(ride);
});

module.exports = router;