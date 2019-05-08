// defining variables in game:
var index = 0;
var computerLetter = "";
var wins = 0
var losses = 0
var remainingGuesses = 10
var lettersTried = ""

// defining array from which computer and player can choose:
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// if the game is opened, the computer picks a letter and does not display it to the player. 
// the player chooses a letter (it is automatically converted to lower case to match the array) and the counters change.
// see conditional comments below...
document.onkeydown = function (event) {
  console.log("myletter:", event.key)
  var letterClick = event.key.toLowerCase()

  if (computerLetter === letterClick){
    wins++
    document.querySelector("#wins").innerHTML = wins
    
    restart()
  }
  
  else {
    remainingGuesses--
    lettersTried = lettersTried + letterClick  
      document.querySelector("#lettersTried").innerHTML = lettersTried
      document.querySelector("#remainingGuesses").innerHTML = remainingGuesses 
    
    if (remainingGuesses === 0) {
      losses++
        document.querySelector("#losses").innerHTML = losses
    
        restart()
    }
  }

// 1st IF (TRUE): compare "player letter" with the computerletter; if guess matches computerletter, update "wins++""; restart program.

// 1st IF (FALSE): compare "player letter" with the computerletter; if guess does not match computerletter, then ELSE: update "letters tried" display with guesses entered by player and "# of remaining guesses --"
// if "remaining guesses" > 0, keep running program.
// 2ND IF "remaining guesses === 0", update "losses++"; restart game.

// creates random string choices that are stored as console log
function calculateComputer() {
  index = Math.floor(Math.random() * alphabet.length)
  computerLetter = alphabet[index]
  console.log("computer: ", computerLetter)
}

// where to populate results:
function start() {
  console.log("start")
  document.querySelector("#wins").innerHTML = "0"   //clear all the variables
  document.querySelector("#losses").innerHTML = "0"   //clear all the variables
  document.querySelector("#remainingGuesses").innerHTML = "10" 
  calculateComputer()
}

// where to clear results with a restart
function restart() {
  document.querySelector("#lettersTried").innerHTML = ""
  document.querySelector("#remainingGuesses").innerHTML = "10"
  remainingGuesses = 10
  lettersTried = ""
  //document.querySelector("").innerHTML = "0"     //clear all the current variables 
  calculateComputer()
}

start()