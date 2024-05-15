const User = require('../models/users');

const loginUser = async (username, password) => {
    try {
        const user = await User.findOne({ username, password });
        return user; // Returns the user if found, otherwise null
    } catch (error) {
        console.error('Login error:', error);
        throw new Error('Error during login');
    }
};

module.exports = { loginUser };
