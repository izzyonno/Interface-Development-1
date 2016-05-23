var openmodal = function() {
  $('.modal').fadeIn();
}

var closemodal = function() {
  $('.modal').fadeOut();
}

//When the user presses the .signin button, fade in the modal window
$('.signin').on('click', openmodal);



//When the user presses the .close button, fade out the modal window
$('.close').on('click', closemodal);


//When the user presses the .submit button, add an .error class to both input elements
$('.submit').on('click', function () {
  $('input').addClass("error");
});


//When the user puts their cursor in one of the input fields, remove the .error class
$('input').on('focus', function () {
  //"this" is the elemment that fired the event
  $(this).removeClass("error");
});


//(Bonus) Allow the user to click the .modal to close itself
//- Tricky, consider what happens when two elements that are overlapping are both waiting for a click

$('.modal').on('click', closemodal);

$('.getstarted').on('click', function() {
  //Don't bubble event up the tree.
  event.stopPropagation();
})
