'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


// RENDERS PAGE AGAIN
 document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    let highscore = 0;
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}
 )

 document.querySelector('.check').addEventListener('click',function(){
     const guess = Number( document.querySelector('.guess').value);
        console.log(guess,typeof guess);

        // WHEN THERE IS NO INPUT
    if (!guess) {
        displayMessage('No number!')    
        // WHEN PLAYER WINS
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct number!';
        displayMessage('Correct number!')    

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'green';

        document.querySelector('.number').style.width = '30rem';

        if ( score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'TOO high!' : 'TOO low';
            displayMessage(guess > secretNumber ? 'TOO high!' : 'TOO low');

            
            score = score -1;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'orange';

        } else {
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;

            displayMessage('You lost the game!')    
            // document.querySelector('.message').textContent = ' You lost the game';
        }

    // // GUESS IS TOO HIGH
    // } else if (guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'TOO high';
    //         score = score -1;
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('body').style.backgroundColor = 'orange';

    //     } else {
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.score').textContent = 0;

    //         document.querySelector('.message').textContent = ' You lost the game';
    //     }


    // // GUESS IS TOO LOW
    // } else if ( guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low';
    //         score = score -1;
    //         document.querySelector('.score').textContent = score;

    //         document.querySelector('body').style.backgroundColor = 'orange';


    //     } else {
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.score').textContent = 0;

    //         document.querySelector('.message').textContent = ' You lost the game';

    //     }
        
    
    }

});
