// defining variables in game:
var index = 0;
var computerLetter = "";
var wins = 0
var losses = 0
var remainingGuesses = 10
var lettersTried = ""

// defining array from which computer can choose:
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var x = document.getElementById("lettersTried");
//===> HOW DO I ENTER A RULE THAT DOESN'T ALLOW OR COUNT REPEATED GUESSES?




// if the game is opened, the computer picks a letter and does not display it to the player. 
// the player chooses a letter (it is automatically converted to lower case to match the array) and the counters change.
// see conditional comments below...
document.onkeydown = function (event) {
  console.log("myletter:", event.key)
 var keypressed= event.key.toLowerCase();
  console.log("lettersTried" +  lettersTried.indexOf(keypressed) );
  //if keyCode is outside of 65-90, ignore (compare "player letter" with the computerletter; if guess does not match index, then ALERT and do not update "# of remaining guesses --")
  if (event.keyCode > 90 || event.keyCode < 65) {
    alert("That's not a letter. Please pick a letter.")
  }
  else if (lettersTried.indexOf(keypressed) > -1) {
    alert("You've tried this letter. Please pick a different letter.");
  }
  else {
    //if between 65-90, proceeds to next IF/ELSE, line 32/40 

    var letterClick = event.key.toLowerCase();

    // compare "player letter" with the computerletter; if guess matches computerletter, update "wins++""; restart program.
    if (computerLetter === letterClick) {
      wins++
      document.querySelector("#wins").innerHTML = " " + wins
      restart()
    }

    // compare "player letter" with the computerletter; if guess does not match computerletter, then ELSE: update "letters tried" display with guesses entered by player and "# of remaining guesses --"
    else {
      remainingGuesses--;
      if (lettersTried !== "") {
        lettersTried = lettersTried + " , " + letterClick;
      }
      else {
        lettersTried = " " + lettersTried + letterClick;
      }


      document.querySelector("#lettersTried").innerHTML = lettersTried
      document.querySelector("#remainingGuesses").innerHTML = " " + remainingGuesses
    }

    // if "remaining guesses" > 0, keep running program; "remaining guesses === 0", update "losses++"; restart game.
    if (remainingGuesses === 0) {
      losses++
      document.querySelector("#losses").innerHTML = " " + losses
      restart()
    }


  }
}

// creates random string choices that are stored as console log
function calculateComputer() {
  index = Math.floor(Math.random() * alphabet.length)
  computerLetter = alphabet[index]
  console.log("computer: ", computerLetter)
}

// where to populate results:
function start() {
  console.log("start")
  document.querySelector("#wins").innerHTML = " 0"   //clear all the variables
  document.querySelector("#losses").innerHTML = " 0"   //clear all the variables
  document.querySelector("#remainingGuesses").innerHTML = " 10"
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