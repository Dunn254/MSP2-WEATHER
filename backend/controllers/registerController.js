const User = require('../models/users');

exports.signup = async (req, res) => {
    const userData = req.body;
    try {
        const newUser = new User(userData);
        await newUser.save();
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//test