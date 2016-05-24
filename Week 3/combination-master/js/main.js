// The current combination:
var dial1 = 5;
var dial2 = 6;
var dial3 = 2;

$('button')
  .on('click', function() {
    // Increase the number on the dial
    $(this).text((parseInt($(this).text()) + 1) % 10);
    // Check the combination
    checkcombo();
  });





var checkcombo = function() {

  var a = $('.one').text();
  var b = $('.two').text();
  var c = $('.three').text();

  console.log (a, b, c);
  var correct = 0;

  if (a == dial1) correct++;
  if (b == dial2) correct++;
  if (c == dial3) correct++;


  if (correct == 1) {
    $('body').css('background', '#e69458');
  }
  else if (correct == 2) {
    $('body').css('background', '#e3cb67');
  }
  else if (correct == 3) {
    $('body').css('background', '#bcdd4e');
  }
  else {
    $('body').css('background', '#d27666');
  }


  // Each time a button is clicked, check the combo:
  // If no number are correct, the background should be #d27666
  // If any one number is correct, the background should be #e69458
  // if any two numbers are correct, the background should be #e3cb67
  // If any three numbers are correct, the background should be #bcdd4e

};
