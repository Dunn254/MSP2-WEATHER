const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    zipCode: String,
    state: String,
    country: String,
    favoriteSport: String,
    favoriteStock: String
});

module.exports = mongoose.model('User', userSchema);
