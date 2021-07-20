//imports
const urlModel = require('../models/url')
const { validationResult } = require('express-validator/check')
const config = require('config')
const validUrl = require('valid-url')
const shortId = require('shortid')
const baseUrl = config.get('baseUrl')

/**
 *
 * @description      Generate short url
 *
 */
const shortenUrl = async (req, res) => {
  const errors = validationResult(req)
  console.log(req.body)

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array())
  }

  const { longUrl } = req.body

  if (validUrl.isUri(longUrl)) {
    try {
      let dbUrl = await urlModel.findOne({ longUrl })

      if (dbUrl) {
        return res.json(dbUrl)
      } else {
        const redirectCode = shortId.generate()
        const newShortUrl = baseUrl + redirectCode
        return res.json(await saveUrlToDB(longUrl, newShortUrl, redirectCode))
      }
    } catch (error) {
      return res.status(500).json('Server internal error')
    }
  } else {
    res.status(401).json(`Invalid passed url ${longUrl}`)
  }
}

async function saveUrlToDB(longUrl, shortUrl, redirectCode) {
  const newUrl = new urlModel({
    longUrl,
    shortUrl,
    redirectCode
  })
  await newUrl.save()

  return newUrl
}

//export
module.exports = shortenUrl
