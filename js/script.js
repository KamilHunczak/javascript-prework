function getMoveName(MoveId){
  if(MoveId == 1){
    return 'kamień';
  }
  else if(MoveId == 2){
    return 'papier';
  }
  else if(MoveId == 3){
    return 'nożyce';
  }
  printMessage('Nie znam ruchu o id ' + MoveId + '.');
  return 'nieznany ruch';
}

function displayResult(computerMove, playerMove){
  if( computerMove == 'kamień' && playerMove == 'papier'||
      computerMove == 'papier' && playerMove == 'nożyce'||
      computerMove == 'nożyce' && playerMove == 'kamień'){
    return 'Ty wygrywasz!';
  }
  else if(computerMove == playerMove) {
    return 'Remis';
  }
  else{
    return 'Niestety przegrywasz';
  }
  }

function playGame(playerInput){
  clearMessages();

  //computer move
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);

  //player move
  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

  printMessage(displayResult(computerMove, playerMove));
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

// document.getElementById('play-rock').addEventListener('click', playGame(1));


