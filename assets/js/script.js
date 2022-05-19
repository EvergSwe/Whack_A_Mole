let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("timeleft");
let score = document.getElementById("score");

function randomSquare() {
   for (let i=0; i<squares.length; i++) { //remove "old" mole before randomly placing a "new"
   squares[i].classList.remove("mole");
   }

   let randomSquare = squares[Math.floor(Math.random() * 9)]; //generate random number between 0-8
   randomSquare.classList.add("mole");
   }

function startEasy() {
   let timer = null
   timer = setInterval(randomSquare, 1000)
   }

function startHard() {
   let timer = null
   timer = setInterval(randomSquare, 700)
   }

   startHard()

   
