 //we use localstorage.getitem for get the value out of localstorage
  // we use json.parse to convert json(string) into javascript(object)

  let score = JSON.parse((localStorage.getItem('score')));

  // After removes score it gives us error null that is why we equals score to null and gives it defaul value
   if(score === null){
    score={
      wins:0,
      losses:0,
      ties:0
    }
   } 
document.querySelector('.js-score').innerHTML=
`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

function playGame(playerMove){
  const computerMove = pickComputermove();
  let result = '';
//Compares player move with computer move to get the result
 if(playerMove==='rock'){
    if(computerMove==='rock')
    {result='Tie';}
    else if(computerMove==='paper')
    {result='You lose';}
  else if(computerMove==='scissor')
  {result='You win';}
} 
  else if(playerMove==='paper'){
  if(computerMove==='rock')
  {result='You win';}
  else if(computerMove==='paper')
  {result='Tie';}
  else if(computerMove==='scissor')
  {result='You lose';}
}
  else if(playerMove==='scissor'){
    if(computerMove==='rock')
    {result='You lose';}
    else if(computerMove==='paper')
    {result='You win';}
    else if(computerMove==='scissor')
    {result='Tie';}
  }
   
  document.querySelector('.js-moves').innerHTML=` You '${playerMove}' - Computer '${computerMove}'`;
  document.querySelector('.js-result').innerHTML= result;

  //Update a score 
  if(result === 'You win'){
    score.wins=score.wins+1;
  }
  else if(result === 'You lose'){
    score.losses=score.losses+1;
  }
  else if(result === 'Tie'){
    score.ties=score.ties+1;
  }
  //we use localstorage.setitem to save our data permenently
  //json.stingify for convert (score) object into string

   localStorage.setItem('score', JSON.stringify(score)) ;

   document.querySelector('.js-score').innerHTML=
`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

 }
 function pickComputermove(){

let computerMove='';
//computer randomly selects a move
const ramdomNumber = Math.random();
    if(ramdomNumber >=0 && ramdomNumber <1/3)
    {computerMove='rock';}
    else if(ramdomNumber >=1/3 && ramdomNumber <2/3)
    {computerMove='paper';}
    else if(ramdomNumber >=2/3 && ramdomNumber <1)
    {computerMove='scissor';}

 return(computerMove);
}