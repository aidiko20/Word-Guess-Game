{
    directionsText = document.getElementById("directions-text");
    document.onkeyup = function (event) {
        var playerGuess = event.key;
        console.log(String.fromCharCode(event.which));
    }
}
var question= ["Guess the country by flag"]

var countries = [
    "Spain", "Malaysia", "Russia", "Zambia", "Italy", "Switzerland", "South Korea", "New Zealand", "Qatar", "Argentina"
]
var countries = countries[Math.floor(Math.random() * countries.length)];

var answerArray = [];
for (var i = 0; i < countries.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = countries.length;

var Wins = 0;
var Looses =0;
var NoOfGuesses=5;
