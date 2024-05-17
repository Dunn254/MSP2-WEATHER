const User = require('../models/users');

exports.signup = async (req, res) => {
    const { username, email, ...otherData } = req.body;

    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        
        if (existingUser) {
            // If user exists, send an error response
            return res.status(400).json({ error: 'Username or email already exists' });
        }

        // If user does not exist, create a new user
        const newUser = new User({ username, email, ...otherData });
        await newUser.save();
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
