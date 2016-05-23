<<<<<<< Updated upstream
var pattern = ['R', 'Y'];
var num = 0;

$('.panel').on('click', function() {

	// Does the panel you clicked match the
	// current item in the sequence

	var colour = $(this).attr('data-colour');

	if ( colour == pattern[num] ) {
		console.log("CORRECT!");
		
		//Short form of: num = num + 1;
		num++;

		if (num > pattern.length-1 ) {
			console.log("YOU WIN!!!!1");
		}
	}
	else {
		console.log("Wrong :(");
	}

});
=======
//The Fortune Teller.//

//These are my variables.//
var statement = "Tell me my fortune." + " fortune()";

var name = "Alice";
var job = "adventurer";
var loc = "Wonderland";
var partner = "The Mad Hatter";
var children = "3";

//Output my fortune to the user interface.//
$('.fortune').text(statement);

var fortune = function() {

  $('.fortune').text ("Your name is " + name + ". " + "You are an " + job + " who lives in " + loc + " with your husband, " + partner + ". " + "You have " + children + " children.")

};




//The Age Calculator.//

//These are my variables.//
var statement = "Calculate your age." + " age()";

var currentyear = 2016;
var birthyear = 1990;

//Output my age to the user interface.//
$('.age').text(statement);

var age = function() {

  if (currentyear > birthyear){
    var age = currentyear - birthyear;

    $('.age').text ("You are " + age + " years old.")
  }

  else if (currentyear < birthyear){
    var age = birthyear - currentyear;

    $('.age').text ("You are not born yet." + "You will be born in " + age + " years.")
  }

};




//The Lifetime Supply Calculator.//

//These are my variables.//
var statement = "A KitKat a Month." + " kitkat()";

var currentage = 26;
var life_expectancy = 81;

//Output my supply to the user interface.//
$('.lifetime').text(statement);

var kitkat = function() {

  if (currentage < life_expectancy){
    var age = life_expectancy - currentage;
    var kitkat = age * 12;

    $('.lifetime').text ("Take a Break! " + "You are " + currentage + " years old. " + "You will need " + kitkat + " KitKats a month to last you until the ripe old age of " + life_expectancy + ".")
  }

  else if (currentage > life_expectancy){
    var age = life_expectancy;
    var kitkat = age * 12;

    $('.lifetime').text ("You have died of KitKat overdose. " + "You ate " + kitkat + " KitKats a month over your lifetime. " + "You were " + life_expectancy + " years old.")
  }

};




//The Circumfrence Calculator.//

//These are my variables.//
var statement = "Calculte the circumfrence & area of a circle. " + "circle()";

var radius = 10;

//Output the circumfrence to the user interface.//
$('.circle').text(statement);

var circle = function() {

    var circumfrence = radius * 2 * 3.14159265;
    var area = 3.14 * radius ^ 2;

    $('.circle').text ("Based on your radius of " + radius + " units, the circumfrence is " + circumfrence + " units. " + "Based on the circumfrence, the area of the circle is " + area + " units.")

};




//The Tempreture Calculator.//

//Define the function//
var convertCtoF = function() {

    var c = $("#temp").val();

    //convert C to F//
    var f = c * 1.8 + 32;

    //Output the results//
    $('.result').html (c + "° celcius is " + f + "° fahrenheit.")
};

//Who = button #ctof
//When = on click
//what = call convertCtoF
$("#ctof").click(convertCtoF);

//keyboard submit, hit enter
$(document).keyup(function() {

  if (event.which == 13) {
    convertCtoF();
  }

});

//
>>>>>>> Stashed changes
