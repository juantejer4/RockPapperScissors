options = ['Rock','Paper','Scissors'];
wins = 0;
loses = 0;

function computerPlay(){
    let numberOfChoice = Math.round(Math.random()*2);
    console.log(numberOfChoice);
    return options[numberOfChoice];
}

function playASingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return 'That \'s a Draw!';
    } else {return winnerOf(playerSelection,computerSelection);}
}

//It only excecutes if two differents elements were chosen
function winnerOf(userChose,computerChose){

    if (userChose == 'Scissors' && computerChose == 'Paper') {
        wins += 1;
        return 'You Win! Scissors beat Paper!'
    } else if (userChose == 'Scissors') {
        loses += 1;
        return 'You Lose! Rock beats Scissors';
    }

    if (userChose == 'Rock' && computerChose == 'Scissors') {
        wins += 1;
        return 'You Win! Rock beats Scissors!';
    } else if (userChose == 'Rock') {
        loses += 1;
        return 'You Lose! Paper beats Rock';
    }

    if (userChose == 'Paper' && computerChose == 'Rock') {
        wins += 1;
        return 'You Win! Paper beats Rock!';
    } else if (userChose == 'Paper') {
        loses += 1;
        return 'You Lose! Scissors beats Paper';
    }
}


//It allows to write 'rock' or 'rOcK'
function capitalize (string) {
    let capitalizedWord = (string.toUpperCase());
    let firstLetterCapitalized = capitalizedWord.substr(0,1);
    let choppedWord = string.substr(1,string.length-1).toLowerCase();
    return firstLetterCapitalized + choppedWord;
}

//Implements player selection
function userPlay(){
    const rock = document.querySelector("#rock");

    rock.onclick = () => {
        console.log('clicked');
    }
}

function game(){
    for (let i=1;i<=5;i++) {
        let playerC = userPlay();
        let computerC = computerPlay();
        playASingleRound(playerC, computerC);
    }
    if (wins > loses) {
        return ('You have won!')
    } else if (wins === loses) {
        return ('It\'s a Draw!')
    } else {
        return ('Computer wins bro!')
    }
}

document.addEventListener("DOMContentLoaded", () => {  
    //TODO
    //Acá tengo que hacer la logica 
  });


