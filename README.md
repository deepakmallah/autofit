# Best Fit a text in a box using ImageMagick
Enter any string in the textbox and program will give you an processed image with that string best fitted in the box.
<br /><br />
Also, Base image can be changed. if we wish change the base image. For that and image url have to be entered in the 2nd textbox. here base image will get pulled from the source and resized to 800 x 420 pixel and processed further to fit the text in the box. <br /> 

_**please Note**: Image url should be open. or else below given image urls can be use for testing_


**Use below images Or any open image** <br />
https://cdn.pixabay.com/photo/2016/12/17/20/06/gas-pump-1914310_1280.jpg
https://cdn.pixabay.com/photo/2016/12/17/14/33/wave-1913559_1280.jpg
https://cdn.pixabay.com/photo/2016/11/29/20/22/child-1871104_1280.jpg
https://cdn.pixabay.com/photo/2016/08/21/23/29/lake-1611044_1280.jpg
https://cdn.pixabay.com/photo/2016/12/14/14/23/hot-chocolate-1906515_1280.jpg

**Library Used**
> imagemagick & graphicsmagick

**Stack Used**
- Nodejs 
- ExpressJs is the framework used
- Ubuntu is the system

**Requirement**
- ImageMagick : install and configure imagemagick using `apt-get install imagemagick`
- GraphicMagick : To install and configure run `sudo apt-get install graphicsmagick`
- There are chances that string is not properly aligned in the box. the reason is missing fonts. To fix this issue run `sudo apt-get install ttf-mscorefonts-installer`. this command will install the missing fonts and issue will be fixed.

