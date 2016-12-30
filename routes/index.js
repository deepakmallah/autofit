var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var gm = require('gm').subClass({imageMagick: true})
var currentTimeStamp = Math.floor(new Date() / 1000);

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

  /*var options = {
    srcData: fs.readFileSync(),
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

  });*/

  var file = path.basename('./public/images/before.jpg');
  var fileName = getNewFileName(file);
  console.log(fileName);

  //gm(request(url))


  gm(path.resolve('./public/images/before.jpg'))
    .resize(1000, 1000)
    //.autoOrient()
    //.font("Helvetica.ttf", 12)
    //.fill("red")
    .stroke("blue", 1)
    .fill("#0008")
    .drawRectangle(100, 100, 200, 200)
    .comment("Deepak Mallah awdadasda sdas asd !"|"gravity")
    //.fill("white")
    //.drawText(100, 100, "Deepak Mallah!")
    //.write(path.resolve('./public/images/after1.png'), function (err) {
    .stream(function (err, stdout, stderr) {
      //var writeStream = fs.createWriteStream('./public/images/after1.png');
      //stdout.pipe(writeStream);
      if (!err) console.log('done1');

      gm(stdout, 'img.jpg')
      //gm(path.resolve('./public/images/before.jpg'))
        .drawText(250, 250, "Deepak Mallah awdadasda sdas asd !")

        //.comment("Deepak Mallah awdadasda sdas asd !"|"gravity")
        .write(path.resolve('./public/images/after2.png'), function (err) {
          if (!err) console.log('done2');
      });
    });

});

module.exports = router;
