let getComputerChoice = function() {
    let randomNum = Math.floor(Math.random()*3);

    switch(randomNum){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

let getHumanChoice = function() {
    let inputChoice = prompt("Rock, Paper or Scissors?","")

    return inputChoice.toLowerCase();
}


function playGame(){
    let playRound = function() {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    
        if (computerChoice === "rock"){
            switch (humanChoice){
                case "rock":
                    console.log("Tie! We both chosen Rock.")
                    return;
                case "paper":
                    humanScore++;
                    console.log("You win! Your Paper beats My Rock.")
                    return;
                case "scissors":
                    computerScore++;
                    console.log("You lose! My Rock beats Your Scissors.")
                    return;
            }   
        }else if(computerChoice === "paper"){
            switch (humanChoice){
                case "rock":
                    computerScore++;
                    console.log("You lose! My Paper beats Your Rock.")
                    return;
                case "paper":
                    console.log("Tie! We both chosen Paper.")
                    return;
                case "scissors":
                    humanScore++;
                    console.log("You win! Your Scissors beats My Paper.")
                    return;
            }
        }else if(computerChoice === "scissors"){
            switch (humanChoice){
                case "rock":
                    humanScore++;
                    console.log("You win! Your Rock beats My Scissors.")
                    return;
                case "paper":
                    computerScore++;
                    console.log("You lose! My Scissors beats Your Paper.")
                    return;
                case "scissors":
                    computerScore++;
                    console.log("Tie! We both chosen Scissors.")
                    return;
            }
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;


    if (humanScore > computerScore){
        console.log(`Congrats You won! You won ${humanScore} times while I only won ${computerScore} times.`)
    }else if (computerScore > humanScore){
        console.log(`You lose! You only won ${humanScore} times while I won ${computerScore} times.`)
    }else{
        console.log(`We have a tie! We both won ${humanScore} times.`)
    }



}


playGame();


