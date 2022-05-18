let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("timeleft");
let score = document.getElementById("score");

function randomSquare() {
   // for (let i=0; i<squares.length; i++) {
   //     squares[i].remove("mole");
   // }


    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    console.log("randomSquare")

    }

    randomSquare()

   // function startEasy() {
   //     let timer = null
   //     timer = setInterval(randomSquare, 1000)
   // }

    //startEasy()

    /**
     * when adding Function StartEasy bug of removing old randomSquare was detected
     * when adding Loop to remove mole from classList everyting was removed.. continue tomorrow 
     */
