let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("timeleft");
let score = document.getElementById("score");

/**
 * remove "old" mole before randomly placing a "new"
 * //generate random integer between 0-8 and place mole
 */
function randomSquare() {
   for (let i=0; i<squares.length; i++) { 
   squares[i].classList.remove("mole");
   }

   let randomSquare = squares[Math.floor(Math.random() * 9)]; 
   randomSquare.classList.add("mole");
   }

// onclick easy game button, start easy game with interval 1s
function startEasy() {
   let timer = null
   timer = setInterval(randomSquare, 1000)
   }

// onclick hard game button, start hard game with interval 0.7s
function startHard() {
   let timer = null
   timer = setInterval(randomSquare, 700)
   }


   
