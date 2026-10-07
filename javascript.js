const startButton = document.getElementById('startButton');
const choosingField = document.getElementById('choosingField');
const botField = document.getElementById('botField');
const choosingFieldDesc = document.getElementById('choosingFieldDescription');
const botFieldDesc = document.getElementById('botFieldDescription');
const resultContainer = document.getElementById('resultContainer');



startButton.addEventListener('click', playFirstGame);

function playFirstGame(){
    startButton.parentElement.removeChild(startButton);
    playGame();
}

function playGame(){

    resultContainer.replaceChildren();

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

    




    const imgOptions = document.getElementsByClassName('options');

    let humanScore = 0;
    let computerScore = 0;

    let roundsPlayed = 0;

    Array.from(imgOptions).forEach(elements => {
        elements.addEventListener('click', elements => {
            playRound(elements.target.id)
        })
    })

    let playRound = function(humanChoice){
        
        let computerChoice = getComputerChoice();

        roundsPlayed++;

        if (computerChoice === "rock"){
            switch (humanChoice){
                case "rock":
                    console.log("Tie! We both chosen Rock.")
                    checkRounds(roundsPlayed, 0);
                    return;
                case "paper":
                    humanScore++;
                    console.log("You win! Your Paper beats My Rock.")
                    checkRounds(roundsPlayed, 1);
                    return;
                case "scissors":
                    computerScore++;
                    console.log("You lose! My Rock beats Your Scissors.")
                    checkRounds(roundsPlayed, -1);
                    return;
            }   
        }else if(computerChoice === "paper"){
            switch (humanChoice){
                case "rock":
                    computerScore++;
                    console.log("You lose! My Paper beats Your Rock.")
                    checkRounds(roundsPlayed, -1);
                    return;
                case "paper":
                    console.log("Tie! We both chosen Paper.")
                    checkRounds(roundsPlayed, 0);
                    return;
                case "scissors":
                    humanScore++;
                    console.log("You win! Your Scissors beats My Paper.")
                    checkRounds(roundsPlayed, 1);
                    return;
            }
        }else if(computerChoice === "scissors"){
            switch (humanChoice){
                case "rock":
                    humanScore++;
                    console.log("You win! Your Rock beats My Scissors.")
                    checkRounds(roundsPlayed, 1);
                    return;
                case "paper":
                    computerScore++;
                    console.log("You lose! My Scissors beats Your Paper.")
                    checkRounds(roundsPlayed, -1);
                    return;
                case "scissors":
                    computerScore++;
                    console.log("Tie! We both chosen Scissors.")
                    checkRounds(roundsPlayed, 0);
                    return;
            }
        }
    }

    let checkRounds = function(rounds, win_tie_loss){
        console.log(`Your Score ${humanScore}, Computer Score ${computerScore}`)
        if (rounds > 5){
            choosingField.replaceChildren();
            choosingFieldDesc.replaceChildren();
            botField.replaceChildren();
            botFieldDesc.replaceChildren();
            displayResults(true);
        }else{
            displayResults(false, win_tie_loss);
        }
    }

    let displayResults = function(isFinished, win_tie_loss){
        resultContainer.replaceChildren();

        const resultsDisplay = document.createElement('p')

        resultsDisplay.classList.add('resultsDesign')

        if(isFinished){
            if (humanScore > computerScore){
                resultsDisplay.style.color = 'green'
                resultsDisplay.textContent = `Congrats You won! You won ${humanScore} times while the Computer only won ${computerScore} times.`
            }else if (computerScore > humanScore){
                resultsDisplay.style.color = 'red'
                resultsDisplay.textContent = `You lose! You only won ${humanScore} times while Computer won ${computerScore} times.`
            }else{
                resultsDisplay.style.color = 'yellow'
                resultsDisplay.textContent = `We have a tie! You both won ${humanScore} times.`
            }

            resultContainer.appendChild(resultsDisplay);

            const playAgain = document.createElement('button');
            playAgain.textContent = 'Play Again?';
            playAgain.id = 'startButton';

            playAgain.addEventListener('click', playGame);

            resultContainer.appendChild(playAgain);

        }else{
            if (win_tie_loss === 1){
                resultsDisplay.style.color = 'green'
                resultsDisplay.textContent = 'Win!'
            }else if (win_tie_loss === -1){
                resultsDisplay.style.color = 'red'
                resultsDisplay.textContent = 'Lose!'
            }else if (win_tie_loss === 0){
                resultsDisplay.style.color = 'yellow'
                resultsDisplay.textContent = 'Tie!'
            }

            resultContainer.appendChild(resultsDisplay);
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