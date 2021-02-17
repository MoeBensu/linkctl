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

    redirectCode: {
        type: String,
        required: true,
    },

    clicks: {
        type: Number,
        default: 0,
        required: true,
    },

    date: {
        type: Date,
        default: new Date(),
    }
});

module.exports = mongoose.model('url', UrlSchema);