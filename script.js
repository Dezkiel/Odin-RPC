let playerChoice = '';
let computerChoice = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let rand = Math.floor((Math.random() * 3 + 1));

    switch(rand)
    {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
        default:
            console.log("ERROR, number was: " + rand);
    }
};

function getPlayerChoice(){
    let choice = prompt('Rock, Paper or Scissors? Type your choice');
    choiceLower = choice.toLowerCase();

    if(choiceLower === 'rock' || choiceLower === 'paper' || choiceLower === 'scissors')
    {
        switch(choiceLower)
        {
            case 'rock':
                playerChoice = 'rock'
                console.log(playerChoice);
                break;
            case 'paper':
                playerChoice = 'paper'
                console.log(playerChoice);
                break;
            case 'scissors':
                playerChoice = 'scissors'
                console.log(playerChoice);
                break;
        }
    }
    else{
        getPlayerChoice();
    }
};

function playRound(playerChoice, computerChoice){
    
    switch(computerChoice)
    {
        case 'rock':
            {
                if(playerChoice == 'rock')
                    {
                        console.log('Draw');
                    }
                    else if(playerChoice == 'paper')
                    {
                        humanScore ++;
                        console.log('you win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);                
                    }
                    else
                    {
                        computerScore++;
                        console.log('computer win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);  
                    }
            }
            break;
            case 'paper':
                {
                    if(playerChoice == 'paper')
                        {
                            console.log('Draw');
                        }
                        else if(playerChoice == 'scissors')
                        {
                            humanScore ++;
                            console.log('you win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);                
                        }
                        else
                        {
                            computerScore++;
                            console.log('computer win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);  
                        }
                }
                break;
                        case 'rock':
            {
                if(playerChoice == 'rock')
                    {
                        console.log('Draw');
                    }
                    else if(playerChoice == 'paper')
                    {
                        humanScore ++;
                        console.log('you win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);                
                    }
                    else
                    {
                        computerScore++;
                        console.log('computer win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);  
                    }
            }
            break;
            case 'scissors':
                {
                    if(playerChoice == 'scissors')
                        {
                            console.log('Draw');
                        }
                        else if(playerChoice == 'rock')
                        {
                            humanScore ++;
                            console.log('you win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);                
                        }
                        else
                        {
                            computerScore++;
                            console.log('computer win this round, you have: ' + humanScore + ' points, computer has ' + computerScore);  
                        }
                }
                break;
    }
};

function playGame(){

    for(let i = 0; i <= 4; i++)
    {
        getComputerChoice();
        getPlayerChoice();
        playRound(playerChoice, computerChoice);
    }

    if(humanScore > computerScore)
        return console.log('You won');
    else if(computerScore > humanScore)
        return console.log('computer won');
    else
        return console.log("it's a draw");
};

playGame();

