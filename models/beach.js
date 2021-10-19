const mongoose = require('mongoose');

const beachSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ''
    }
})

module.exports = mongoose.model('Beach', beachSchema);