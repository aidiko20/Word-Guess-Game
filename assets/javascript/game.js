
var question = ["Guess the country by flag"];
var answerArray = [];
var Wins = 0;
var Looses = 0;
var NoOfGuesses = 5;
var matchedLetters = [];
var guessLeft = 0;
var lettersOfTHEWord = [];
var letterGuessed = null;
var typedLetters = [];


document.addEventListener('keydown', function (e) {
    document.getElementById("directions-text").style.display = "none";
});

function startGame() {
    var countries = [
        "SPAIN", "MALAYSIA", "RUSSIA", "ZAMBIA", "ITALY", "SWITZERLAND", "SOUTH KOREA", "NEW ZEALAND", "QATAR", "ARGENTINA"
    ]
    var country = countries[Math.floor(Math.random() * countries.length)];


    lettersOfTHEWord = country.split("");

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
        location.reload();
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
    typedLetters += letter + " ";
    guessLeft--;
    document.querySelector("#guessLeft").innerHTML = guessLeft;
    document.querySelector("#typedLetters").innerHTML = typedLetters;
    
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
    if (matchedLetters.length === 0) {
        loss = true;
    }
    else {
        loss = false;
    }
    if (loss) {
        loss++;
        document.querySelector("#Losses").innerHTML = loss;
    }
}


