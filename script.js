
const objects = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let humanScore = 0;
let game = 0;

function sleep(num) {
	let now = new Date();
	const stop = now.getTime() + num;
	while(true) {
		now = new Date();
		if(now.getTime() > stop) return;
	}
}
function computerPlay(){
    let word = objects[Math.floor(Math.random()*objects.length)];
    return word;
}
function playRound(playerSelection, computerSelection) {

        if (playerSelection == computerSelection){
            console.log("You both selected " + playerSelection);
            document.getElementById("scoreboard").innerText = "You both selected " + playerSelection
        }
        else if ( (playerSelection == objects[0] && computerSelection == objects[1]) || (playerSelection == objects[1] && computerSelection == objects[2]) || (playerSelection == objects[2] && computerSelection == objects[0]) ){
            console.log("Computer wins. " + computerSelection + " beats " + playerSelection);
            computerScore ++;
            console.log("Computer score is "+ computerScore);
            document.getElementById("scoreComputer").innerText = "Computer Score: " + computerScore
            document.getElementById("scoreboard").innerText = "Computer wins. " + computerSelection + " beats " + playerSelection
        }
        else if ( (playerSelection == objects[0] && computerSelection == objects[2]) || (playerSelection == objects[1] && computerSelection == objects[0]) || (playerSelection == objects[2] && computerSelection == objects[1]) ){
            console.log("You win. " + playerSelection + " beats " + computerSelection);
            humanScore ++;
            console.log("Human score is " + humanScore);
            document.getElementById("scoreHuman").innerText = "Human Score: " + humanScore
            document.getElementById("scoreboard").innerText = "You win. " + playerSelection + " beats " + computerSelection
        }
        if (computerScore == 5){
            document.getElementById("scoreboard").innerText = "Computer won 5 - " + humanScore + ". The game will restart in three seconds." ;
        }
        else if (humanScore == 5){
            document.getElementById("scoreboard").innerText = "You won 5 - " + computerScore + ". The game will restart in three seconds." ;
        }
        

}

function computerTrail(){
    let computerSelection = computerPlay();
    if (computerSelection == "Rock"){
        document.getElementById("rockComputer").classList.add('clicking');
        console.log("I'm " + computerSelection + "but made trail for Rock COmputer")
    }
    else if (computerSelection == "Paper"){
        document.getElementById("paperComputer").classList.add('clicking');
        console.log("I'm " + computerSelection + "but made trail for paper COmputer")
    }
    else if (computerSelection == "Scissors"){
        document.getElementById("scissorsComputer").classList.add('clicking');
        console.log("I'm " + computerSelection + "but made trail for scissors COmputer")
    }
    return computerSelection;
}

function getClicked(e){
    console.log(this.classList.value)
    let weapon = this.classList.value
    let playerSelection;
    let computerSelection;
    if (weapon == 'box rockHuman'){
        this.classList.add('clicking');
        playerSelection = objects[0];
        computerSelection = computerTrail();

    }
    else if(weapon == "box paperHuman"){
        this.classList.add('clicking');
        playerSelection = objects[1];
        computerSelection = computerTrail();

        
    }
    else if(weapon == "box scissorsHuman"){
        this.classList.add('clicking');
        playerSelection = objects[2];
        computerSelection = computerTrail();
        
    }
    playRound(playerSelection,computerSelection );

}
 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;{
        e.target.classList.remove('clicking');
    }
    if (computerScore == 5 || humanScore == 5){
            reset();
    }
}

function reset(){
    sleep(3000);
    setTimeout(function () { location.reload(true); }, 100);
}

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', getClicked));
    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));