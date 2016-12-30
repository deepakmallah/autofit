var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var imagemagick = require('imagemagick-native');
/* GET home page. */
router.get('/', function(req, res, next) {

  fs.writeFileSync(path.resolve('./public/images/after.png'), imagemagick.convert({
    srcData: fs.readFileSync(path.resolve('./public/images/before.png')),
    format: 'PNG',
    quality: 100 // (best) to 1 (worst)
  }));

  res.render('index', { title: 'Express' });
});

module.exports = router;
