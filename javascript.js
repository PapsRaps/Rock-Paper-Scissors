



// function playGame(){
//     let playRound = function() {

//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
    
//         if (computerChoice === "rock"){
//             switch (humanChoice){
//                 case "rock":
//                     console.log("Tie! We both chosen Rock.")
//                     return;
//                 case "paper":
//                     humanScore++;
//                     console.log("You win! Your Paper beats My Rock.")
//                     return;
//                 case "scissors":
//                     computerScore++;
//                     console.log("You lose! My Rock beats Your Scissors.")
//                     return;
//             }   
//         }else if(computerChoice === "paper"){
//             switch (humanChoice){
//                 case "rock":
//                     computerScore++;
//                     console.log("You lose! My Paper beats Your Rock.")
//                     return;
//                 case "paper":
//                     console.log("Tie! We both chosen Paper.")
//                     return;
//                 case "scissors":
//                     humanScore++;
//                     console.log("You win! Your Scissors beats My Paper.")
//                     return;
//             }
//         }else if(computerChoice === "scissors"){
//             switch (humanChoice){
//                 case "rock":
//                     humanScore++;
//                     console.log("You win! Your Rock beats My Scissors.")
//                     return;
//                 case "paper":
//                     computerScore++;
//                     console.log("You lose! My Scissors beats Your Paper.")
//                     return;
//                 case "scissors":
//                     computerScore++;
//                     console.log("Tie! We both chosen Scissors.")
//                     return;
//             }
//         }
//     }
    
//     let humanScore = 0;
//     let computerScore = 0;


//     if (humanScore > computerScore){
//         console.log(`Congrats You won! You won ${humanScore} times while I only won ${computerScore} times.`)
//     }else if (computerScore > humanScore){
//         console.log(`You lose! You only won ${humanScore} times while I won ${computerScore} times.`)
//     }else{
//         console.log(`We have a tie! We both won ${humanScore} times.`)
//     }



// }



const startButton = document.getElementById('startButton');
const choosingField = document.getElementById('choosingField');
const botField = document.getElementById('botField');
const choosingFieldDesc = document.getElementById('choosingFieldDescription');
const botFieldDesc = document.getElementById('botFieldDescription');
const resultContainer = document.getElementById('resultContainer');


const resultDisplay = document.createElement('p');

resultDisplay.style.color = 'white';


startButton.addEventListener('click', playGame);

function playGame(){
    const playerFieldDescription = document.createElement('p');
    const botFieldDescription = document.createElement('p');

    playerFieldDescription.textContent = "You Choose:"
    botFieldDescription.textContent = "Bot Chosen:"

    choosingFieldDesc.appendChild(playerFieldDescription);
    botFieldDesc.appendChild(botFieldDescription);


    const rockBTN = document.createElement('img');
    const paperBTN = document.createElement('img');
    const scissorsBTN = document.createElement('img');
    const botChosen = document.createElement('img');

    rockBTN.classList.add('options')
    rockBTN.id = 'rock'
    rockBTN.src = './images/rock.jpg'
    rockBTN.alt = 'Picture of a Rock'

    paperBTN.classList.add('options')
    paperBTN.id = 'paper'
    paperBTN.src = './images/paper.jpg'
    paperBTN.alt = 'Picture of a Paper'

    scissorsBTN.classList.add('options')
    scissorsBTN.id = 'scissors'
    scissorsBTN.src = './images/scissors.jpg'
    scissorsBTN.alt = 'Picture of a Pair of Scissors'

    choosingField.appendChild(rockBTN);
    choosingField.appendChild(paperBTN);
    choosingField.appendChild(scissorsBTN);

    botChosen.classList.add('botOptions')
    botChosen.src = './images/question_mark.jpg'
    botChosen.alt = 'Picture of a Question Mark'

    botField.appendChild(botChosen);

    startButton.parentElement.removeChild(startButton);




    const imgOptions = document.getElementsByClassName('options');

    Array.from(imgOptions).forEach(elements => {
        elements.addEventListener('click', elements => {
            playRound(elements.target.id)
        })
    })

    let humanScore = 0;
    let computerScore = 0;

    let playRound = function(humanChoice){
        
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
}

let getComputerChoice = function() {
    let randomNum = Math.floor(Math.random()*3);
    const botChosen = document.getElementsByClassName('botOptions')
    

    switch(randomNum){
        case 0:
            botChosen[0].src = `./images/rock.jpg`
            return "rock";
        case 1:
            botChosen[0].src = `./images/paper.jpg`
            return "paper";
        case 2:
            botChosen[0].src = `./images/scissors.jpg`
            return "scissors";
    }
}