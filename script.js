function getComputerMove() {
  let randomNum = Math.random();

  if (randomNum < 1/3) {
      return "Rock";  
  } else if (randomNum < 2/3) {
      return "Paper"; 
  } else {
      return "Scissors"; 
  }
}

let computerMove = getComputerMove();
console.log("Computer chose:", computerMove);

