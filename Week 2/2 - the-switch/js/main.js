// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)

// Swap the colors of the body's background and text by adding or removing the dark/light class

// Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turn off the lights?" when it's off


var ligthsOn = "It's so bright in here!"
var lightsOff = "Hey, who turned off the lights?"

$(document).ready(function(){

  $(".switch").click(function(){
    $("button").toggleClass("off");
    $("body").toggleClass("dark");

    if ( $("button").hasClass("off") ) {
      $(".status").text(lightsOff);
    }

    else {
      $(".status").text(ligthsOn);
    }

  });

});
