var games = 0;
var wins = 0;
var losses = 0;
var draws = 0

var items = ["R", "P", "S"];

var playGame = function() {
    var userChoice = window.prompt("Enter, R, P, or S:");

    if(!userChoice){
        return;
    } else {
        games++;
    }

userChoice = userChoice.toUpperCase();

var index = Math.floor(Math.random() * items.length);
var computerChoice = items[index];

window.alert("The computer chose " + computerChoice);

if(userChoice === computerChoice) {
    draws++;
    window.alert("It's a draw!")
} else if (
          (userChoice === "R" && computerChoice === "S") ||
          (userChoice === "P" && computerChoice === "R") ||
          (userChoice === "S" && computerChoice === "P")) 
          {
            wins++;
            window.alert("You Win!e");
          }
          else {
            losses++;
            window.alert("You Lose!")
          }
          window.alert("Stats:\nGames Played: " + games + "\nWins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws);

          var playAgain = window.confirm("Play again?");
          if(playAgain) {
            playGame();
          }
};

playGame()
