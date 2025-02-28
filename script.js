// Keep track of scores
let playerScore = 0;
let computerScore = 0;

// Function to get the computer's move
function getComputerMove() {
    let moves = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3); // Random number between 0 and 2 for the index [0, 1, 2]
    return moves[randomNum];
}

// Function to handle game logic
function playGame(playerChoice) {   
    let computerMove = getComputerMove();
    let result;
    
    if (playerChoice === computerMove) {
        result = "It's a tie! 🤔";
    } else if (
        (playerChoice === "Rock" && computerMove === "Scissors") ||
        (playerChoice === "Paper" && computerMove === "Rock") ||
        (playerChoice === "Scissors" && computerMove === "Paper")
    ) {
        result = "You win! 😎";
        playerScore++; // Increase player score
    } else {
        result = "Computer wins! 😩";
        computerScore++; // Increase AI score
    }

    // Update the score display on the page
    document.getElementById("yourScore").textContent = playerScore;
    document.getElementById("aiScore").textContent = computerScore;

    // Show result on the page
    document.getElementById("result").textContent = `You chose ${playerChoice}, Computer chose ${computerMove}. ${result}`;
}
