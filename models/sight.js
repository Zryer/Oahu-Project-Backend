const mongoose = require('mongoose');

const sightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ''
    }
})

module.exports = mongoose.model('Sight', sightSchema);