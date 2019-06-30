{
    directionsText = document.getElementById("directions-text");
    document.onkeyup = function (event) {
        var playerGuess = event.key;
        console.log(String.fromCharCode(event.which));
    }
}
var question = ["Guess the country by flag"];
var answerArray = [];
// for (var i = 0; i < countries.length; i++) {
//  answerArray[i] = "_";
// }
// var remainingLetters = countries.length;

var Wins = 0;
var Looses = 0;
var NoOfGuesses = 5;
var matchedLetters = [];
var guessLeft = 0;
var lettersOfTHEWord = [];
var letterGuessed = null;

function startGame() {
    var countries = [
        "SPAIN", "MALAYSIA", "RUSSIA", "ZAMBIA", "ITALY", "SWITZERLAND", "SOUTH KOREA", "NEW ZEALAND", "QATAR", "ARGENTINA"
    ]
    var countries = countries[Math.floor(Math.random() * countries.length)];

    console.log("country: " + countries);

    lettersOfTHEWord = countries.split("");

    console.log("letters: " + lettersOfTHEWord);
    generateUNDERSCORES();
    setTotalGuess();
}
function generateUNDERSCORES() {
    var wordView = "";
    for (var i = 0; i < lettersOfTHEWord.length; i++) {
        if (matchedLetters.indexOf(lettersOfTHEWord[i]) !== -1) {
            wordView += lettersOfTHEWord[i];

        }
        else {
            wordView += "&nbsp;_&nbsp";
        }
    }
    document.querySelector("#currentWord").innerHTML = wordView;
}
function setTotalGuess() {
    NoOfGuesses = lettersOfTHEWord.length + 5;
    guessLeft = NoOfGuesses;
    document.querySelector("#guessLeft").innerHTML = guessLeft;

}
startGame();

document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.which).toUpperCase();
    updatePage(letterGuessed);
}
function updatePage(letter) {
    if (guessLeft == 0) {
        restartGame();
    }
    else {
        updateGuesses(letter);
        updateCorrectMatch(letter);
        generateUNDERSCORES();
        updateWins(Number);
        updateLoss(Number);
    }
}
function updateGuesses(letter) {
    if (letterGuessed.indexOf(letter) === -1 && lettersOfTHEWord.indexOf(letter) === -1) {
        letterGuessed.push(letter);
        guessLeft--;
        document.querySelector("#guessLeft").innerHTML = guessLeft;
    }
}
function updateCorrectMatch(letter) {
    for (var i = 0; i < lettersOfTHEWord.length; i++) {
        if (letter === lettersOfTHEWord[i] && matchedLetters.indexOf(letter) === -1) {
            matchedLetters.push(letter);
        }
    }
}
// add letter already guessed function
function updateWins() {
    var win;
    if (matchedLetters.length === 0) {
        win = false;
    }
    else {
        win = true;
    }
    if (win) {
        wins++;
        document.querySelector("#Wins").innerHTML = wins;
    }
}
function updateLoss() {
    var loss;
    if (matchedLetters.length === -1) {
        loss = false;
    }
    else {
        loss = true;
    }
    if (loss) {
        loss++;
        document.querySelector("#Losses").innerHTML = loss;
    }
}
 function restartGame(){
     var startGame;
     if (matchedLetters.length === wins){
         prompt("You won the game!")
     }
 }

 