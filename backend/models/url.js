//imports
const mongoose = require('mongoose');

//constrct a db schema
const UrlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
    },

    shortUrl: {
        type:String,
        required: true,
    },

    clicks: {
        type: Number,
        default: 0,
        required: true,
    },

    date: {
        type: String,
        default: new Date(),
    }
});

module.exports = mongoose.model('url', UrlSchema);