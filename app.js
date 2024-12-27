// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const rideRoutes = require('./routes/rides');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});