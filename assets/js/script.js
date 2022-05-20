let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let score = document.getElementById("score");


let timer = null;
let result = 0;

/**
 * onclick easy-game button, start easy game with interval 1s
 * and start the time to count down
 */
function startEasy() {   
   timer = setInterval(randomSquare, 1000);
   countDownSeconds();
   randomSquare();
   }

/**
 * onclick hard-game button, start hard game with interval 0.7s
 * and start the time to count down
 */
function startHard() {
   timer = setInterval(randomSquare, 700);
   countDownSeconds();
   }

/**
 * when starting the game the the clock countdown starts from 60
 * value reduce by 1 at an interval of 1s
 * when 
 * */
function countDownSeconds() {

   let time = document.getElementById("timeleft");
   let countDownTimer = setInterval(function() {  
   let newTime = time.innerHTML;
   newTime--;
   time.innerHTML = newTime;

   if (newTime === 0) {
         clearInterval(countDownTimer);
         clearInterval(timer);
         alert("GAME OVER!");
   }
}, 1000);

}

/**
 * remove "old" mole before randomly placing a "new"
 * generate random integer between 0-8 and place mole
 * get moleLocation square id
 */
function randomSquare() {
   for (let i=0; i<squares.length; i++) { 
   squares[i].classList.remove("mole");
   }

   let randomSquare = squares[Math.floor(Math.random() * 9)]; 
   randomSquare.classList.add("mole");

   moleLocation = randomSquare.id;
   console.log(moleLocation) //Remove when finalizing

   //check mouse down location if position == moleLocation if it does result++ else result


   }

