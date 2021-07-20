//imports
const urlModel = require('../models/url')

/**
 *
 * @description     handle redirect request
 *
 */
const redirect = async (req, res) => {
  try {
    const url = await urlModel.findOne({
      redirectCode: req.params.redirectCode
    })

    if (url) {
      url.clicks++
      await url.save()
      return res.json({ longUrl: url.longUrl })
    } else {
      return res
        .status(401)
        .json(`Invalid url with id ${req.params.urlCode} to redirect`)
    }
  } catch (error) {
    return res.status(500).json('Server internal error')
  }
}

//export
module.exports = redirect
