let score = document.getElementById("score");

//global 
let timer = null; 

/**
 * onclick easy-game button, start easy game with interval 1s
 * and start the timeleft count down
 */
function startEasy() {   
   timer = setInterval(randomSquare, 1000);
   countDownSeconds();
}

/**
 * onclick hard-game button, start hard game with interval 0.7s
 * and start the timeleft count down
 */
function startHard() {
   timer = setInterval(randomSquare, 700);
   countDownSeconds();
}

/**
 * when starting the game the the clock countdown starts from 60
 * time value reduce by 1 at an interval of 1s
 * 
 * */
function countDownSeconds() {

   time = document.getElementById("timeleft");
   countDownTimer = setInterval(function() {  
   newTime = time.innerHTML;
   newTime--;
   time.innerHTML = newTime;

   if (newTime === -1) {
      clearInterval(countDownTimer);
      clearInterval(timer)
      time.innerHTML = 5; // change to 30 when finalizing
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

   let squares = document.getElementsByClassName("square");
   let mole = document.getElementsByClassName("mole");

   for (let i=0; i<squares.length; i++) { 
   squares[i].classList.remove("mole");
   }

   let randomSquare = squares[Math.floor(Math.random() * 9)]; 
   randomSquare.classList.add("mole");

   let moleLocation = randomSquare.id;
   console.log(moleLocation) //Remove when finalizing

//check mouse down location if position == moleLocation if it does result++ else result

}

