var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColor);
}

function makeSound(color){
    switch(color){
        case "green":
            var greenAudio = new Audio("./sounds/green.mp3");
            greenAudio.play();
            break;
        case "red":
            var redAudio = new Audio("./sounds/red.mp3");
            redAudio.play();
            break;
        case "blue":
            var blueAudio = new Audio("./sounds/blue.mp3");
            blueAudio.play();
            break;
        case "yellow":
            var yellowAudio = new Audio("./sounds/yellow.mp3");
            yellowAudio.play();
            break;
        default:
            console.log(color);
            break;
    }
}

// nextSequence();
