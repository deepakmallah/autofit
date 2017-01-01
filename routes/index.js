var express = require('express');
var server = express()
var router = express.Router();
var path = require('path');
var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true });
var currentTimeStamp = Math.floor(new Date() / 1000);
var im = require('imagemagick');
var _dir = "public/images/";
var name = null;
var baseImage = "public/images/default.jpg";
var finalImage = _dir+'resulted_file.jpg'

/**
 * ////return new Promise(function(resolve, reject){
 * //gm(request(url))
 * //http://aheckmann.github.io/gm/docs.html
 */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Autofit Text in the Box", img: finalImage});
});

router.post('/generate', function(req, res, next) {
  if(req && req.body){
    generateImg(req.body.str)
      .then(function(err, response){
        return res.redirect('/');
      })
      .catch(function(err){
        console.log(err)
        next();
      });
  }
});

/**
 * random string generator from alphanumeric and current Timestamp
 * @param name
 * @returns {string}
 */
function getName(str){
  return new Promise(function(resolve, reject){
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ ){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.name = text;
    return resolve(str);
  });
};

/**
 * Creates text in the box
 * @param str
 * @returns {Promise}
 */
var textInBox = function(str){
  return new Promise(function(resolve, reject){
    if(str){
      try{
        var fileName = _dir+this.name+'.png';
        var args = [
          '-border','1%x1%',
          //'-strokewidth','1',
          //'-stroke','black',
          '-background','none',
          '-fill','blue',
          '-gravity','center',
          '-size',200+'x'+200,
          //'-extent', 200+'x'+200,
          "caption:"+unescape(str),
          path.resolve(fileName),
        ];
        im.convert(args, function(err, response){
          if (err)
            return reject({error: true, msg: err});
          else
            return resolve(fileName);
        });
      }catch (err){
        return reject({error: true, msg: err});
      }
    }else{
      return reject({error: true, msg: "string is missing."});
    }
  });
};

var mergeImage = function(boxedImg){
  return new Promise(function(resolve, reject){
    try{
      gm()
        .command("composite")
        .in("-geometry", "+100+100")
        .in(path.resolve(boxedImg))
        .in(path.resolve(baseImage))
        .write(path.resolve(finalImage), function (err) {
          if (err)
            return reject({error: true, msg: err});
          else
            fs.unlink(boxedImg);
            return resolve(finalImage);
        });
    }catch (err){
      return reject({error: true, msg: err});
    }
  });
};

var generateImg = function(str){
  return new Promise(function(resolve, reject){
    getName(str)
      .then(textInBox)
      .then(mergeImage)
      .then(function(err, res){
        return resolve(res);
      })
      .catch(function(err){
        console.log("Error Occured while processing => "+err.msg);
      });
  });
};

module.exports = router;
