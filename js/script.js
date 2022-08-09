//functions
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
  if( computerMove == 'kamień' && playerMove == 'papier'){
    return 'Ty wygrywasz!';
  }
  else if(computerMove == 'papier' && playerMove == 'nożyce'){
    return 'Ty wygrywasz!';
  }
  else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    return 'Ty wygrywasz!';
  }
  else if(computerMove == playerMove) {
    return 'Remis';
  }
  else{
    return 'Niestety przegrywasz';
  }
  }

//computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);


//player move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);


//game score
printMessage(displayResult(computerMove, playerMove));
