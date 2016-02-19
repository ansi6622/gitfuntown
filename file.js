$(function(){
  var pictureArr = ['http://www.astonhotels.com/assets/slides/690x380-Hawaii-Turtle.jpg','http://www.colbybrownphotography.com/assets/Hawaii_4461.jpg', 'http://www.hawaiiactive.com/img/pictures/kauai-kalalau-valley-lookout.jpg'];
  var nextimage=0;

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
