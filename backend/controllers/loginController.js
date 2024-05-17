const User = require('../models/users');

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
        try {
            const user = await User.findOne({ username, password });
    
            if (user) {
                // Authentication successful
                console.log('Login successful')
                res.status(200).json({ message: 'Login successful', user });
            } else {
                // Authentication failed
                console.log('Invalid credentials')
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
};
