





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
    
    let notAcceptable = true;
    while(notAcceptable){
        
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            notAcceptable = false;
        }
        else {
            alert("That is not an acceptable option! Please choose again!")
        }
    }

    computerSelection = getComputerChoice();

   
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
    const selection = document.createElement('div');
    const body = document.querySelector('body');
    selection.setAttribute('style','font-size:90%; color: black; background-color:white; width:180px; height: 50px; position: absolute; top: 50%')
    
    selection.textContent = "Player picked " + playerSelection + ", Computer picked " + computerSelection +". " + roundResult;
    
    body.appendChild(selection);
    

    // selection.setAttribute('style', 'font-size:90%; background-color: white; width: 180px; height: 50px');


    let playerPoints = 0;
    let computerPoints = 0;
    
        // roundResult = singleroundRockPaperScissors();

            if(roundResult == "Player gets a point!"){
                playerPoints += 1;
                }
        
            else if (roundResult == "Computer gets a point!"){
                computerPoints += 1;
                }
  


    return {playerPoints,
            computerPoints,
        }

}




// function judge(playerPoints, computerPoints) {
//     if (computerPoints > playerPoints) {
//         return "Computer is the winner!";
//     }

//     else if (computerPoints < playerPoints) { 
//         return "Player is the winner!";
//     }

//     else {
//         return  "No winner!";
//     }
// }


    
// function Counts( roundCount ) {
//     if ( roundCount >= 5 ) {
//         btn1.style.visibility = "hidden";
//         btn2.style.visibility = "hidden";
//         btn3.style.visibility = "hidden";
//     }
// }




// const body = document.querySelector('body');

//     const div = document.createElement('div');
//     body.appendChild(div);

//Create three buttons for each selection 
//Create button via js requires const buttonname.
//Need to write function for each of them.
//Separated to styles in to cssfile, html in to heml file.

    // const btn1 = document.createElement('button');
    // const btn2 = document.createElement('button');
    // const btn3 = document.createElement('button');

    // btn1.textContent = "Scissors";
    // btn1.innerHTML = '<img src="images/pexels-karolina-grabowska-4226910.jpg">';

    // btn2.textContent = "Rock";
    // btn2.innerHTML = '<img src="images/pexels-pixabay-161702.jpg">';

    // btn3.textContent = "Paper";
    // btn3.innerHTML = '<img src="images/pexels-dulce-espinoza-602900.jpg">';

 
    // btn1.setAttribute('style', 'width:100px; height:50px; border: none; border-radius: 4px;' );
    // btn2.setAttribute('style', 'width:100px; height:50px; border: none; border-radius: 4px;' );
    // btn3.setAttribute('style', 'width:100px; height:50px; border: none; border-radius: 4px;' );

    // div.appendChild(btn1);
    // div.appendChild(btn2);
    // div.appendChild(btn3);

     // btn2.addEventListener('click', () => {
    //     playerSelection = "rock";
    //     singleroundRockPaperScissors()
    //     })

    // btn3.addEventListener('click', () => {
    //     playerSelection = "paper";
    //     singleroundRockPaperScissors();
    //     })
    
    
       
   
        // let playerPoints = 0;
        // let computerPoints = 0;
    
        // roundResult = singleroundRockPaperScissors();

        //     if(roundResult == "Player gets a point!"){
        //         playerPoints += 1;
        //         }
        
        //     else if (roundResult == "Computer gets a point!"){
        //         computerPoints += 1;
        //         }

    //     function game() {
    //     //Below code should appear after five rounds are run
        
    //      // console.log(gameState)
    // } 


    //Associate buttons with the function 
    const button = document.getElementsByClassName('rpsBtn');

    let roundCount = 0; 

    for (let i = 0; i < 3; i++) { 
        if (button[i]) {
            button[i].addEventListener('click', () => {
                if (button[i].innerText || button[i].textContent == "rock") {
                    playerSelection = "rock";
                    singleroundRockPaperScissors();
                    roundCount += 1;
                    console.log(singleroundRockPaperScissors())
                }
    
                else if (button[i].alt == "scissors") {
                    playerSelection = "scissors";
                    singleroundRockPaperScissors();
                    roundCount += 1;
                }
    
                else if (button[i].alt == "paper") {
                    playerSelection = "paper";
                    singleroundRockPaperScissors();
                    roundCount += 1;
                }
            });
        }
    }

    function judge(playerPoints, computerPoints) {
        if (computerPoints > playerPoints) {
            return "Computer is the winner!";
        }
    
        else if (computerPoints < playerPoints) { 
            return "Player is the winner!";
        }
    
        else {
            return  "No winner!";
        }
    }
    


         if ( roundCount = 5 ) {
            gameState = judge(playerPoints, computerPoints);

            const totalPlayerPoints = document.getElementsByClassName('totalPlayerPoints');
            const totalCompPoints = document.getElementsByClassName('totalCompPoints');

        
            totalPlayerPoints.textContent = "Player got " + playerPoints.toString() + " points";
            totalCompPoints.textContent = "Computer got " + computerPoints.toString() + " points";
        

            

            // console.log("Player got " + playerPoints.toString() + " points")
            // console.log("Computer got " + computerPoints.toString() + " points")
            const finalWinner = document.getElementsByClassName('judge');
            finalWinner.textContent = gameState
            
            // if (button.innerText || button.textContent == "rock") {
            //     playerSelection = "rock";
            //     singleroundRockPaperScissors();
            //     game();
            //     roundCount = 0;
            // }

            // else if (button.innerText == "scissors") {
            //     playerSelection = "scissors";
            //     singleroundRockPaperScissors();
            //     game();
            //     roundCount = 0;
            // }

            // else if (button.innerText == "paper") {
            //     playerSelection = "scissors";
            //     singleroundRockPaperScissors();
            //     game();
            //     roundCount = 0;
            // }           
            }
        

        

        const characterText = document.getElementsByClassName("characterText");
        const character = document.getElementsByClassName("character");


        character[0].addEventListener("click", openText);

        function openText() {
            characterText[0].classList.add("openText");
       }