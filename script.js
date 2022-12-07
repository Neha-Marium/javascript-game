const rock="rock";
const paper="paper";
const scissors="scissors";
let playerScore=0;
let computerScore=0;
let i;

alert(`Let's Play Rock, Paper or Scissors!`);

function computerPlay() {
    const options = [rock, paper, scissors];
    const computerChoice= Math.floor(Math.random()*3);
    return options[computerChoice];
  }

function playerOption(){
    while (true) {
        let choice = prompt("Select one option: Rock, Paper or Scissors ?") .toLowerCase();
        if (choice === rock || choice === paper || choice === scissors)
        {
            return choice;
        } 
        else
            alert(`Invalid Input! Select again.`);    
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("Round",i,"\nYou chose ",playerSelection,"and Computer chose ",computerSelection,"!");

    if (playerSelection === rock && computerSelection === scissors)
    {
        console.log("You Win! Rock beats Scissors");
        playerScore++;
        alert(`The Score is:\nYou: ${playerScore} - Computer: ${computerScore}`);
    }
    else if (playerSelection === rock && computerSelection === paper)
    {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        alert(`The Score is:\nYou: ${playerScore} - Computer: ${computerScore}`);
    }
    else if (playerSelection === paper && computerSelection === rock)
    {
        console.log("You Win! Paper beats Rock");
        playerScore++;
        alert(`The Score is:\nYou: ${playerScore} - Computer: ${computerScore}`);
    }
    else if (playerSelection === paper && computerSelection === scissors)
    {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
        alert(`The Score is:\nYou: ${playerScore} - Computer: ${computerScore}`);
    }
    else if(playerSelection === scissors && computerSelection === rock)
    {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
        alert(`The Score is:\nYou: ${playerScore} - Computer: ${computerScore}`);
    }
    else if(playerSelection === scissors && computerSelection === paper)
    {
        console.log("You Win! Scissors beats Paper");
        playerScore++;
        alert(`The Score is:\nYou: ${playerScore} - Computer: ${computerScore}`);
    }
    else{
        console.log("Tie!");
        alert(`The score is:\nYou: ${playerScore} - Computer: ${computerScore}`);  
    }
}
        
function game(){
    for(i=1; i<6; i++)
    {
        const computerSelection= computerPlay();
        const playerSelection = playerOption();
        playRound(playerSelection, computerSelection);
    }
    alert(`Total Score of 5 rounds:\nYou: ${playerScore} - Computer: ${computerScore}`);
    if(playerScore > computerScore)
    {
        console.log("FINAL RESULT: \nCongratulations! You WON the game :)");
    }
    else if (playerScore < computerScore)
    {
        console.log("FINAL RESULT: \nYou Lost the Game!");
    }
    else
        console.log("FINAL RESULT: \nIt's a Tie.");
}

game();