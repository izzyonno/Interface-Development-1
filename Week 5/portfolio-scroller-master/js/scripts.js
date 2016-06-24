// # Portfolio Sample
// A simple example of a portfolio.

// ## To Do

// - When the page scrolls, slide the logo up at half the logo up at half the rate
// - When the page has fully scrolled by one screen height, hide the logo, show the top bar

$(window).on('scroll', function() {

  var px = $(this).scrollTop(); //Total pixels scrolled
  var h = $(window).height();   //Height of the window
  var percent = px/h;           //% of the window scrolled

  console.log( (px/h) + '% has been scrolled.');

  //Apply negative ps to move it up at half relative
  //Apply inverse of percentage scrolled to affect opacity
  $('.logo')
    .css('top', -px)
    .css('opacity', 1 - percent);

    //If the px scrolled exceeds the height of hte page (full scroll)
  if (px >= h) {
    $('.bar').addClass('slidedown');
  } else {
  $('.bar').removeClass('slidedown');
  }

});
