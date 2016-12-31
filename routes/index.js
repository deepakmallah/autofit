var express = require('express');
var server = express()
var router = express.Router();
var fs = require('fs');
var path = require('path');
var gm = require('gm').subClass({ imageMagick: true });
var currentTimeStamp = Math.floor(new Date() / 1000);
var im = require('imagemagick');
/**
 * Creates New file name using current Timestamp
 * @param name
 * @returns {string}
 */
function getNewFileName(name){
  var tmp = name.split(".");
  return tmp[0]+"_"+currentTimeStamp+"."+tmp[1];
};

/* GET home page. */
router.get('/', function(req, res, next) {

  var file = path.basename('./public/images/before.jpg');
  var fileName = getNewFileName(file);
  console.log(fileName);

  ////return new Promise(function(resolve, reject){
  //gm(request(url))
  //http://aheckmann.github.io/gm/docs.html
  var msg = "A";
  var args = [
    '-strokewidth','1',
    '-stroke','red',
    '-background','yellow',
    '-fill','white',
    '-gravity','center',
    '-size',200+'x'+200,
    "caption:"+unescape(msg),
    path.resolve('./public/images/before_new.jpg'),
  ];
  im.convert(args, function(err, response){
    if(err) console.log(err)

    gm()
      .command("composite")
      .in("-geometry", "+100+100")
      .in(path.resolve('./public/images/before_new.jpg'))
      .in(path.resolve('./public/images/before.jpg'))
      .write(path.resolve('./public/images/resulted_file.jpg'), function (err) {
        if (err)
          console.log(err)
        else
          res.render('index', { title: path.resolve('./public/images/resulted_file.jpg') });
      });
  });
});

router.post('/generate', function(req, res, next) {
  console.log("res")
  console.log(res)

  console.log("req")
  console.log(req)

});

module.exports = router;
