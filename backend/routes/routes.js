const express = require('express');
const router = express.Router();


/**
 * @rout            GET api/:urlCode
 * @description     redirect short url to original url
 * 
 */
router.get('/:redirectCode', require('../controllers/redirect'));


/**
 * 
 * @route           POST /api/shorten
 * @description     Generate a short url and add it into db
 * 
 */
router.post('/shorten', require('../controllers/shortenUrl'));



module.exports = router;