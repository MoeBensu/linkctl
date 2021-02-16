//imports
const express = require('express');
const router = express.Router();
const urlModel = require('../models/url');

/**
 * @rout            GET api/:urlCode
 * @description     redirect short url to original url
 * 
 */
router.get('/:urlCode', async (req, res) => {

    try {
        const url = await urlModel.findOne( { urlCode: req.params.urlCode } );

        if (url) {
            url.clicks++;
            await url.save();
            return res.redirect(url.longUrl);
        } else {
            return res.status(401).json(`Invalid url with id ${req.params.urlCode} to redirect`);
        }
    } catch (error) {
        return res.status(500).json('Server internal error');
    }

});

//export
module.exports = router;