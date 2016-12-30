var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var imagemagick = require('imagemagick-native');
/* GET home page. */
router.get('/', function(req, res, next) {

  var options = {
    srcData: fs.readFileSync(path.resolve('./public/images/before.jpg')),
    format: 'PNG',
    quality: 100, // (best) to 1 (worst)
    width: 200,
    height: 200,
    caption: "jhvjhvhvhuvv bjbj  jbjbjbj",
    text: "Deepak"
  };

  imagemagick.convert(options, function (err, buffer) {
    console.log("Err")
    console.log(err)
    console.log("<br />")
    console.log("success")
    console.log(buffer)
    fs.writeFileSync(path.resolve('./public/images/after.png'), buffer);

  });
});

module.exports = router;
