function robot () {
  var robotMove = Math.random();
  if (robotMove <.33) {
  return "rock"
}else if (robotMove <.66){
  return "paper"
}else{
  return "scissors"
  }
}

function player (playerMove){
  var robotMove = robot();
  if (robotMove === playerMove){
  return "Draw!"
} else if (robotMove==="rock" && playerMove=== "paper"|| robotMove==="paper" && playerMove==="scissors" || robotMove==="scissors" && playerMove==="rock")
  return "Loser!"
  else {
    return "Winner!"
  }
}
