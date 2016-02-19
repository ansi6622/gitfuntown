$(function(){
  var pictureArr = ['http://www.astonhotels.com/assets/slides/690x380-Hawaii-Turtle.jpg','http://www.colbybrownphotography.com/assets/Hawaii_4461.jpg', 'http://www.hawaiiactive.com/img/pictures/kauai-kalalau-valley-lookout.jpg'];
  var nextimage=0;
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Slideshow</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  </head>
  <body>

    <style>
  .slider{
    height: 600px;
    width: 600px;
    border: 1px solid blue;
  }
  .fa {
    font-size: 3em;
  }
    </style>


  <div class="slider"></div>

  <i class="fa fa-arrow-circle-o-left"></i>

  <i class="fa fa-arrow-circle-o-right"></i>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
  <script src="app.js"></script>

  </body>
  </html>

  doSlideshow();

  function doSlideshow()
  {
      if($('.slider').length!=0)
      {
          $('.slider').fadeOut(500,function(){slideshowFadeIn();$(this).remove()});
      }
      else
      {
          slideshowFadeIn();
      }
  }
  function slideshowFadeIn()
  {
      $('.slider').prepend($('<img class="slideshowimage" src="'+pictureArr[nextimage++]+'" style="display:none">').fadeIn(500,function(){setTimeout(doSlideshow,1000);}));
      if(nextimage>=images.length)
          nextimage=0;
  }
}
