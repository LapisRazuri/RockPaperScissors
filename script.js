

function getComputerChoice () {
    randomVal = Math.random();
    if (randomVal < 0.3) {
        randomVal = "Rock";
    }

    else if (randomVal< 0.6) {
        randomVal = "Paper";  
    }
        
    else {
        randomVal = "Scissor"; 
    }

    console.log(randomVal);
    }

   console.log(getComputerChoice())