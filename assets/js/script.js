let score = document.getElementById("score");
let result = 0;
let timer = null;
let moleLocation = null;

/**
 * Initial function called from html body
 * adding mouse down listener to squares
 * and calls the square clicked function
 */
function init() {
   let squares = document.getElementsByClassName("square");
   
   for (let square of squares) { 
      square.addEventListener("mousedown", (e) => {
         squareClicked(e);
      });
   }
}

/**
 * Check if square is clicked
 * if clicked and mole is hit the score is increased by 1
 * writes it back to html and mole location is set to null * 
 */
function squareClicked(e) {
   if (e.target.id === moleLocation) {
      result++;
      score.innerHTML = result;
      moleLocation = null;      
   }
}

/**
 * onclick easy-game button, start easy game with interval 1s
 * and start the timeleft count down
 */
function startEasy() {   
   timer = setInterval(randomSquare, 1000);
   countDownSeconds();
   result = 0;
   score.innerHTML = 0;
}

/**
 * onclick hard-game button, start hard game with interval 0.7s
 * and start the timeleft count down
 */
function startHard() {
   timer = setInterval(randomSquare, 600);
   countDownSeconds();
   result = 0;
   score.innerHTML = 0;
}

// game instruction popup
function togglePopupInfo() {
   document.getElementById("popupinfo1").classList.toggle("active");
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
      clearTimeout(countDownTimer);
      clearTimeout(timer);
      alert("GAME OVER! You whacked " + result + " Moles");
      time.innerHTML = 30;   
      }
   }, 1000);
}

/**
 * remove "old" mole before randomly placing a "new"
 * generate random integer between 0-8 and place mole
 */
 function randomSquare() {

   let squares = document.getElementsByClassName("square");
   
   for (let square of squares) { 
   square.classList.remove("mole");
   }

   let randomSquare = squares[Math.floor(Math.random() * 9)]; 
   randomSquare.classList.add("mole");

   moleLocation = randomSquare.id;
}

