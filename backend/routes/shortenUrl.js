//imports
const express = require('express');
const router = express.Router();
const urlModel = require('../models/url');

const config = require('config');
const validUrl = require('valid-url');
const shortId = require('shortid');
const baseUrl = config.get('baseUrl');

/**
 * 
 * @route           POST /api/shorten
 * @description     Generate a short url and add it into db
 * 
 */
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;

    if (validUrl.isUri(longUrl)) {

        try {

            let dbUrl = await urlModel.findOne({longUrl});

            if (dbUrl) {
                return res.json(dbUrl);
            } else {
                const urlCode = shortId.generate();
                const newShortUrl = baseUrl + urlCode;
                return res.json( await saveUrlToDB(longUrl, newShortUrl, urlCode));
            }

        } catch (error) {
            return res.status(500).json('Server internal error');
        }

    } else {
        res.status(401).json(`Invalid passed url ${ longUrl }`);
    }
});

async function saveUrlToDB(longUrl, shortUrl, urlCode) {
    const newUrl = new urlModel({
        longUrl,
        shortUrl,
        urlCode,
    });
    await newUrl.save();

    return newUrl;
}

//export
module.exports = router;