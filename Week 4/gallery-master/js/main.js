var perfectsquares = function() {

  var w = $('.galimg').width();
  $('.galimg').height(w);

  // Look at each individual image separately
  // We call this a loop
  $('.galimg img').each (function() {

    var w = $(this).width();
    var h = $(this).height();


    if (w > h) {
      $(this).addClass("landscape");

      w = $(this).width();
      h = $(this).height();
      var diff = ((h - w) / 2);
      $(this).css('left', diff + "px");

      // http://stackoverflow.com/questions/16310918/css-scale-and-square-center-crop-image
      // var mw = -(((w/h) * 100)-100)/2;  //math the negative margin
            // $(this).css('margin-left', mw + '%');
    }


    else if (h > w) {
      $(this).addClass("portrait");

      w = $(this).width();
      h = $(this).height();
      var diff = ((w - h) / 2);
      $(this).css('top', diff + "px");

      // http://stackoverflow.com/questions/16310918/css-scale-and-square-center-crop-image
      // var mt = -(((h/w) * 100)-100)/2; //math the negative margin
           // $(this).css('margin-top', mt + '%');
    }

  });

};

//When the window is ready or gets resized, recalculate squares
$(window).on("ready resize", function() {
 perfectsquares();
});


//On click of the image...
$('.galimg img').on('click', function() {

  //Keep track of which image modal is open
  $(this).addClass('open');

  //Select the modal, clear it out, show it
  $('.modal').empty().removeClass('hidden');

  //Fade modal in slowly
  $('.modal').fadeIn('slow');

  //Clone this image we clicked on and add it to the modal
  $(this).clone().appendTo('.modal');

  //Copy the caption and add it to the modal
  var cap = $(this).attr('data-caption');
    // $('.modal').append('<figcaption>'+cap+'</figcaption>')

    $('<figcaption>')
    .text(cap)
    .css({'color':'white', 'font-size':'2em'})
    .appendTo('.modal');

});


//Close modal
var closeModal = function() {
  $(this).fadeOut('slow');
};

$('.modal').on('click', closeModal);
