    
    const score = {
        wins: 0,
        losses: 0,
        Ties: 0,

    };
    
    const resultado = document.getElementById("resultado");
    const movPlayer = document.getElementById("movPlayer");
    const movComputer = document.getElementById("movComputer");
    const scoreDisplay = document.getElementById("scoreDisplay");


    function resetScore(){
          score.wins = 0;
          score.losses = 0;
          score.Ties = 0;
    }
    
    
    function playRock() {
        const randomNumber = Math.random(); 
        let computerMove = ''; 
            
        if(randomNumber >= 0 && randomNumber < 1/3){ 
            computerMove = 'Rock'; 
        } else if(randomNumber >= 1/3 && randomNumber < 2/3){ 
            computerMove = 'Paper'; 
        } else if (randomNumber >= 2/3 && randomNumber < 1){ 
            computerMove = 'Scissors'; 
        } 

        console.log(computerMove); 
        let result = ''; 

        if(computerMove === 'Rock'){ 
            result = 'Tie..'; 
        } else if(computerMove === 'Paper'){ 
            result = 'You lose'; 
        } else if(computerMove === 'Scissors'){ 
            result = 'You Win'; 
        } 
        if(result === 'You Win'){
            score.wins += 1;
        } else if (result === 'You lose'){
            score.losses += 1;
        }else if(result === 'Tie..'){
            score.Ties += 1;
        }
        movComputer.textContent = `Computer chose: ${computerMove}`;
        resultado.textContent = `Result: ${result}`;
        scoreDisplay.textContent = `Wins: ${score.wins} Losses:${score.losses} Ties: ${score.Ties} `;

       /*  alert(`You picked Rock. Computer picked ${computerMove}. ${result}
 Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`);  */
    }
    function playPaper() {
        const randomNumber = Math.random(); 
        let computerMove = ''; 
            
        if(randomNumber >= 0 && randomNumber < 1/3){ 
            computerMove = 'Rock'; 
        } else if(randomNumber >= 1/3 && randomNumber < 2/3){ 
            computerMove = 'Paper'; 
        } else if (randomNumber >= 2/3 && randomNumber < 1){ 
            computerMove = 'Scissors'; 
        } 

        console.log(computerMove); 
        let result = ''; 

        if(computerMove === 'Rock'){ 
            result = 'You Win'; 
        } else if(computerMove === 'Paper'){ 
            result = 'Tie..'; 
        } else if(computerMove === 'Scissors'){ 
            result = 'You Lose'; 
        } 
      
        if(result === 'You Win'){
            score.wins += 1;
        } else if (result === 'You Lose'){
            score.losses += 1;
        }else if(result === 'Tie..'){
            score.Ties += 1;
        }
        movComputer.textContent = `Computer chose: ${computerMove}`;
        resultado.textContent = `Result: ${result}`;
        scoreDisplay.textContent = `Wins: ${score.wins} Losses:${score.losses} Ties: ${score.Ties} `;
/*  */
/*         alert(`You picked Paper. Computer picked ${computerMove}. ${result} */
/* Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`);  */
    }
    function playScissors() {
        const randomNumber = Math.random(); 
        let computerMove = ''; 
            
        if(randomNumber >= 0 && randomNumber < 1/3){ 
            computerMove = 'Rock'; 
        } else if(randomNumber >= 1/3 && randomNumber < 2/3){ 
            computerMove = 'Paper'; 
        } else if (randomNumber >= 2/3 && randomNumber < 1){ 
            computerMove = 'Scissors'; 
        } 

        console.log(computerMove); 
        let result = ''; 

        if(computerMove === 'Rock'){ 
            result = 'You Lose'; 
        } else if(computerMove === 'Paper'){ 
            result = 'You Win'; 
        } else if(computerMove === 'Scissors'){ 
            result = 'Tie..'; 
        } 


        if(result === 'You Win'){
            score.wins += 1;
        } else if (result === 'You Lose'){
            score.losses += 1;
        }else if(result === 'Tie..'){
            score.Ties += 1;
        }

        movComputer.textContent = `Computer chose: ${computerMove}`;
        resultado.textContent = `Result: ${result}`;
        scoreDisplay.textContent = `Wins: ${score.wins} Losses:${score.losses} Ties: ${score.Ties} `;

        /* alert(`You picked Scissors. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`);  */
            

    }


    





















    function calculateTax(cost, taxPercent = 0.1){
        console.log(taxPercent);
        console.log(cost * taxPercent);
        
    }
    calculateTax(2000, 0.2);
    calculateTax(5000);

    const product={
        name: 'socks',
        price: 1090
    };
    console.log(product);
    console.log(product.name);
    console.log(product.price);

    product.name = 'cotton socks';
    console.log(product);

    product.newProperty = true;
    console.log(product);
    
    delete product.newProperty;
    console.log(product);