var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick: true });

var imagemagick = require('imagemagick-native');
var currentTimeStamp = Math.floor(new Date() / 1000);
var easyimg = require('easyimage');
var caption = require('caption');

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

/*
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
*/

/*
  gm(200, 200, "#ddff99f3")
    //.drawText(10, 50, "from scratch")
    //.fill("red")


    .stroke("red", 7)
    .fill("#ffffffbb")
    .drawLine(20, 10, 50, 40)
    .fill("#2c2")
    .stroke("blue", 1)
    .drawRectangle(40, 10, 50, 20)
    .drawRectangle(60, 10, 70, 20, 3)
    .drawArc(80, 10, 90, 20, 0, 180)
    .drawEllipse(105, 15, 3, 5)
    .drawCircle(125, 15, 120, 15)
    .drawPolyline([140, 10], [143, 13], [145, 13], [147, 15], [145, 17], [143, 19])
    .drawPolygon([160, 10], [163, 13], [165, 13], [167, 15], [165, 17], [163, 19])
    .drawBezier([180, 10], [183, 13], [185, 13], [187, 15], [185, 17], [183, 19])
    .fontSize(68)
    .stroke("#efe", 2)
    .fill("#888")
    .drawText(-20, 98, "graphics magick")
    .write(path.resolve('./public/images/scratch_after.png'), function(err){
      if (err) return console.dir(arguments)
      console.log(this.outname + ' created  :: ' + arguments[3])
    });*/
/*
  var options = {
    srcData: fs.readFileSync(path.resolve('./public/images/before.jpg')),
    background: 'red',
    gravity: 'center',
    fill: 'white',
    size: '260x70',
    caption: "jhvjhvhvhuvv bjbj  jbjbjbj",
  };

  imagemagick.convert(options, function (err, buffer) {
    console.log("Err")
    console.log(err)
    console.log("<br />")
    console.log("success")
    console.log(buffer)
    fs.writeFileSync(path.resolve('./public/images/after_new.png'), buffer);

  });*/

  /**
   * mytext="Cheers\!"

   convert                            \
   -background '#0008'              \
   -gravity center                  \
   -fill white                      \
   -size 260x70 caption:"${mytext}" \
   funny-santa.jpg                 \
   +swap                            \
   -gravity south                   \
   -composite                       \
   funny-santa---1.jpg
   */
/*
 gm()
 .command("convert")
 .in("-caption",  "mycaption")
 .in("myimage.jpeg")
 .in("-thumbnail",  "250x250")
 .in("+polaroid")
 // insert other options...
 .write(path.resolve('./public/images/after_new.png'), function (err) {
 if (err) return console.log(err);
 });
 */

  imageMagick()
    .command("convert")
    .in("-caption",  "asdasdas da d as da ds as d ads a sd as d as d  d a da sd as d asd as d ad sa d ")
    .in(path.resolve('./public/images/before.jpg'))
    .in("-thumbnail",  "250x250")
    .in("-background", "#0008")
    .in("-gravity",  "center")
    .in("-fill",  "white")

    .in("+polaroid")
    //.in("-composite")

    // insert other options...
    .write(path.resolve('./public/images/after_new.png'), function (err) {
      if (err) return console.log(err);
    });
});

module.exports = router;
