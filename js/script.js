{
const playGame= (playerInput)=>{

  const getMoveName = (MoveId) => {
    if(MoveId == 1){
      return 'rock';
    }
    else if(MoveId == 2){
      return 'paper';
    }
    else if(MoveId == 3){
      return 'scisors';
    }
  }
  
  clearMessages();
  
  //computer move
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  document.getElementById('computer-choice-image').src='images/'+computerMove+'.png';

  //player move
  const playerMove = getMoveName(playerInput);
  document.getElementById('player-choice-image').src='images/'+playerMove+'.png';


  const displayResult = (computerMove, playerMove) => {
    if( computerMove == 'rock' && playerMove == 'paper'||
        computerMove == 'paper' && playerMove == 'scisors'||
        computerMove == 'scisors' && playerMove == 'rock'){
      return 'You Win!';
    }
    else if(computerMove == playerMove){
      return 'Draw';
    }
    else{
      return 'You Lost';
    }
  }
  printMessage(displayResult(computerMove, playerMove));
  
}

  document.getElementById('play-rock').addEventListener('click', ()=> {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', ()=> {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', ()=> {
    playGame(3);
  });
}