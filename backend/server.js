const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const registerController = require('./controllers/registerController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit with error
});

// Middleware to parse JSON requests
app.use(express.json());

// Signup route
app.post('/signup', registerController.signup);

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await loginUser(username, password);

        if (user) {
            // Authentication successful
            res.status(200).json({ message: 'Login successful', user });
        } else {
            // Authentication failed
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
