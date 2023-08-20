function getComputerChoice () {
    randomVal = Math.random();
    if (randomVal < 0.3) {
        randomVal = "rock";
    }

    else if (randomVal< 0.6) {
        randomVal = "paper";  
    }
        
    else {
        randomVal = "scissors"; 
    }

    return randomVal;
    }

function singleroundRockPaperScissors () {
    const rock = document.createElement("img");
    rock.src = "pexels-pixabay-161702.jpg";

    const scissors = document.createElement("img");
    scissors.src = "pexels-karolina-grabowska-4226910.jpg";

    const paper = document.createElement("img");
    paper.src = "pexels-dulce-espinoza-602900.jpg"


    
    let notAcceptable = true;
    while(notAcceptable){
        // playerSelection = prompt("What do you choose? Rock? Scissors? or Paper?").toLowerCase();
        if (playerSelection == rock || playerSelection == paper || playerSelection == scissors){
            notAcceptable = false;
        }
        else {
            alert("That is not an acceptable option! Please choose again!")
        }
    }


    computerSelection = getComputerChoice();

    let roundResult;
    if ((computerSelection == "rock" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "paper")) {
        roundResult = "Draw!";
    }

    else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "rock" )) {
        roundResult = "Computer gets a point!"; 
    }

    else if ((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "scissors")) {
        roundResult = "Player gets a point!"; 

    }
    
    // console.log("Player picked " + playerSelection + ", Computer picked " + computerSelection +". " + roundResult);
    const display = document.createElement('div');
            display.textContent = "Player picked " + playerSelection + ", Computer picked " + computerSelection +". " + roundResult;
            body.appendChild(display);
    return roundResult
}

function judge(playerPoints, computerPoints) {
    if (computerPoints >= 5) {
        return "Computer is the winner!";
    }

    else if (playerPoints >= 5) { 
        return "Player is the winner!";
    }

    // else {
    //     return  "No winner!";
    // }

    // Below is the original code
    // if (computerPoints > playerPoints) {
    //     return "Computer is the winner!";
    // }

    // else if (computerPoints < playerPoints) { 
    //     return "Player is the winner!";
    // }

    // else {
    //     return  "No winner!";
    // }
}



function game() {
    let playerPoints = 0;
    let computerPoints = 0;





    // for(let i = 0; i < 5; i++) {
        roundResult = singleroundRockPaperScissors();

        if(roundResult == "Player gets a point!"){
            playerPoints += 1;
        }
    
        else if (roundResult == "Computer gets a point!"){
            computerPoints += 1;
        }

    // }
        
    gameState = judge(playerPoints, computerPoints);
    //const  = document.createElement('div');
    const displayPlayerPoints = document.createElement('div');
    displayPlayerPoints.textContent = "Player got " + playerPoints.toString() + " points";
    body.appendChild(displayPlayerPoints);

    const displayComputerPoints = document.createElement('div');
    displayComputerPoints.textContent = "Computer got " + computerPoints.toString() + " points";
    body.appendChild(displayComputerPoints);

    // console.log("Player got " + playerPoints.toString() + " points")
    // console.log("Computer got " + computerPoints.toString() + " points")
    console.log(gameState)
}

//Create div inside the body
const body = document.querySelector('body');

const div = document.createElement('div');
body.appendChild(div);

//Create three buttons for each selection 
for (let i = 0; i < 3; i++ ) {
    
    let rpsimgArray = new Array();

    rpsimgArray[0] = new Image();
    rpsimgArray[0].src = 'pexels-karolina-grabowska-4226910.jpg';
    rpsimgArray[0].alt = 'scissors';

    rpsimgArray[1] = new Image();
    rpsimgArray[1].src = 'pexels-pixabay-161702.jpg';

    rpsimgArray[2] = new Image();
    rpsimgArray[2].src = 'pexels-dulce-espinoza-602900.jpg';




    const btn = document.createElement('button');


        btn.textContent = rpsimgArray[i];

        btn.setAttribute('style', 'color: black; background: coral; width:120px; height:120px; border-color:yellow; font-size: 22px; font-weight: 500;' )
        btn.setAttribute('class', [i])

        //Associate buttons with the function

        btn.addEventListener('click', () => {
             playerSelection = rpsimgArray[i];
             singleroundRockPaperScissors();
        })

        body.appendChild(btn);
    }    
    
//Put spaces in-between the boxes
body.style.cssText = 'display: flex; justify-content:space-around; align-items:center; width: 100%; height: 100vh;'


//Create div for illustration attributes


    












