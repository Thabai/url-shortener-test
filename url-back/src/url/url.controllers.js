const validUrl = require('valid-url')
const shortid = require('shortid')

// import the Url database model
const Url = require("./url.model");

exports.createUrl = async (req, res) => {
  try {
    const longUrl = req.body.longUrl;
    if (validUrl.isUri(longUrl)) {
        const url = await Url.findOne({ longUrl: longUrl })
            if (url) {
                res.status(200).send({url: url})
            } else {
            // if new create
            const urlCode = shortid.generate()
            const shortUrl = process.env.BASE_URL + urlCode;
            const newUrl = new Url({
                    urlCode: urlCode,
                    longUrl: longUrl,
                    shortUrl: shortUrl,
                })
        const savedUrl = await newUrl.save();
        res.status(200).send({url: savedUrl})
            }}
        // exception handler
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Server Error'})
        }
};

exports.findUrl = async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.urlCode })
        if (url) {
            // when valid we perform a redirect
           res.redirect(url.longUrl)
        } else {
           res.status(404).send({ message: 'No URL Found'})
        }
    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).send({ message: 'Server Error'})
    }
};
