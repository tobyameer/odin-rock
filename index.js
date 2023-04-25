


const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player Wins"
    }else {
        return "Computer Wins"
    }

}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "Its a Tie!"
    }else if(result == "Player Wins"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase(); 
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Lets Play!")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        if(checkWinner(playerSelection, computerSelection) == "Player Wins"){
            scorePlayer++;
        }else if(checkWinner(playerSelection, computerSelection) == "Computer Wins"){
            scoreComputer++;
        }else{
            scoreComputer++;
            scorePlayer++;
        }
        console.log("Your score is " + scorePlayer + " Computers score is " + scoreComputer)
        console.log(".................................")
    }
    console.log("Game Over")
    if(scorePlayer < scoreComputer){
        console.log("Computer Wins!")
        console.log("Your score is " + scorePlayer + " Computers score is " + scoreComputer)
    }else if(scoreComputer < scorePlayer){
        console.log("You Win!")
        console.log("Your score is " + scorePlayer + " Computers score is " + scoreComputer)
    }else {
        console.log("We have a Tie!")
        console.log("Your score is " + scorePlayer + " Computers score is " + scoreComputer)
    }
}
game()