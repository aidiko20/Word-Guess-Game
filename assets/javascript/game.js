// {
//     directionsText = document.getElementById("directions-text");
//     document.onkeyup = function (event) {
//         var playerGuess = event.key;
//         console.log(String.fromCharCode(event.which));
//     }
// }
var question= ["Guess the country by flag"];
var answerArray = [];
// for (var i = 0; i < countries.length; i++) {
//  answerArray[i] = "_";
// }
// var remainingLetters = countries.length;

var Wins = 0;
var Looses =0;
var NoOfGuesses=5;
var matchedLetters = [];
var guessLeft = 0;
var lettersOfTHEWord =[];
var letterGuessed = null;

function startGame(){
    var countries = [
        "SPAIN", "MALAYSIA", "RUSSIA", "ZAMBIA", "ITALY", "SWITZERLAND", "SOUTH KOREA", "NEW ZEALAND", "QATAR", "ARGENTINA"
    ]
    var countries = countries[Math.floor(Math.random() * countries.length)];

    console.log("country: " +countries);
    
     lettersOfTHEWord = countries.split("");

    console.log("letters: " +lettersOfTHEWord);
    generateUNDERSCORES();
    setTotalGuess();
}
function generateUNDERSCORES(){ 
    var wordView = "";
    for(var i=0; i<lettersOfTHEWord.length;i++){
        if(matchedLetters.indexOf(lettersOfTHEWord[i]) !== -1){
            wordView += lettersOfTHEWord[i];

        }
        else{
            wordView += "&nbsp;_&nbsp";
        }
    }
    document.querySelector("#currentWord").innerHTML = wordView;
}

