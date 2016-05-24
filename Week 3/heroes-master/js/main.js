////////GLOBAL SCOPE

// Show the first character
$('.hero').first().addClass("shown");

//Store a function
var doname = function () {
  // Store the name
  var name = $('.shown').attr('title');

  //Print the name
  $('.name').text(name)
}

//Run a function
doname();

////////END GLOBAL SCOPE



// Show the next character
$('.next').on('click', function(){

  //If on last sibling, go back to the first.
  if ( $('.shown').is(':last-child')) {
    $('.shown')
      .removeClass("shown")
      .siblings()
      .first()
      .addClass("shown");
  }

  else {
    //Find the shown character, remove the shown class, move to next hero, add the shown class.
    $('.shown')
      .removeClass("shown")
      .next()
      .addClass("shown");
  }

  doname();

});


// Show the previous character
$('.prev').on('click', function(){

  //If on last sibling, go back to the first.
  if ( $('.shown').is(':first-child')) {
    $('.shown')
      .removeClass("shown")
      .siblings()
      .last()
      .addClass("shown");
  }

  else {
    //Find the shown character, remove the shown class, move to next hero, add the shown class.
    $('.shown')
      .removeClass("shown")
      .prev()
      .addClass("shown");
  }

  doname();

});
