options = ['Rock','Paper','Scissors'];
wins = 0;
loses = 0;
rounds = 0;

function computerPlay(){
    let numberOfChoice = Math.round(Math.random()*2);
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
        return 'You Win! Scissors beats Paper!'
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
function userPlay(selection){
    let playerC = selection;
    let computerC = computerPlay();
    let singleRoundResult = playASingleRound(playerC, computerC);
    rounds++;
    showRoundStats(computerC, singleRoundResult);
    updateScore(wins,loses);
}


function checkResult(){
        if (wins > loses) {
            return ('You have won!')
        } else if (wins === loses) {
            return ('It\'s a Draw!')
        } else {
            return ('Computer wins bro!')
        }
}

function showRoundStats(cc, srr){
    const cchoice = document.querySelector('.choice-container');
    cchoice.innerHTML = `<div>The computer has chosen ` + cc + `</div>
    <div>` + srr + `</div>`;
}

function updateScore(w, l){
    const yourScore = document.querySelector('#your-score');
    const computerScore = document.querySelector('#computer-score');
    yourScore.innerHTML = w;
    computerScore.innerHTML = l;

}

function showWinner(r){
    const c = document.querySelector('.choice-container');
    c.innerHTML = `<div>` + r + `</div>`;
}

function playerSelection(option) {
    if (rounds !== 5) {
        userPlay(option);
    } else {
        let result = checkResult();
        showWinner(result);
    }
}

document.addEventListener('DOMContentLoaded', () => {  
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const refresh = document.querySelector('#refresh');

    rock.onclick = () => {
        playerSelection('Rock');
    }
    paper.onclick = () => {
        playerSelection('Paper');
    }
    scissors.onclick = () => {
        playerSelection('Scissors');
    }

    refresh.onclick = () => {
        location.reload();
    }
  });


