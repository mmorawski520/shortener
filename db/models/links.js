const mongoose = require("mongoose"
const Link = mongoose.model('Link',{originalLink: String,
    shortenedLink:String});
module.exports = Link