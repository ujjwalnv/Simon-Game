var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
//   console.log(randomChosenColor);
}
nextSequence();
