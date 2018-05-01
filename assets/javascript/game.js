// Global variables

var counter = 0;
var targetNumber = (Math.floor(Math.random() * 50)+1);
var numberOptions = [4,6,3,10];
var crystalArray =  ["assets/images/1.png", "assets/images/2.png","assets/images/3.png","assets/images/4.png"]
var playAgain = "";
var wins = 0;
var losses = 0;

$("#number-to-guess").text(targetNumber);


function reset() {
    counter = 0;
    targetNumber = (Math.floor(Math.random() * 50)+1);
    $("#number-to-guess").text(targetNumber);
    
};


// add crystal images with unique numbers

for (var i = 0; i < crystalArray.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalArray[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

//Game operations - game is constantly running


$(".crystal-image").on("click", function(){
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#testDisplay").text("Your total score is: " + counter);

    if(counter === targetNumber) {
        reset();
        wins ++;
        $("#winsDisplay").text(wins);
        
    } else if(counter > targetNumber) {
        reset();
        losses ++;
        $("#lossesDisplay").text(losses);    
    }

    });



