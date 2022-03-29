const btnRoll = document.querySelector(".btn-roll");
const diceEL = document.querySelector(".dice");
const btnHold = document.querySelector(".btn-hold");

btnRoll.addEventListener("click", startGame);  

let currentplayer = 0;
let accuRandNum = 0;
let score = [0, 0];
let gamestate = true;

function switchplayer(){
    accuRandNum = 0;
        document.querySelector(`.current-${currentplayer}`).textContent = accuRandNum;

        currentplayer = currentplayer == 0 ? 1 : 0;

        document.querySelector(".player-0").classList.toggle("active-player");
        document.querySelector(".player-1").classList.toggle("active-player");

}

function startGame(){
    
    if(gamestate == true){

         //generate random numbers between 1 and 6

    let randNum = 1 + Math.floor(Math.random () * 6);

    diceEL.src = `images/dice-${randNum}.png`;

    diceEL.style.display = "block";


    //test if random number is not 1

    if(randNum != 1){
        accuRandNum += randNum;
        document.querySelector(`.current-${currentplayer}`).textContent = accuRandNum;
    }else{

        //switch player

        switchplayer();

    }
    }
   
}

btnHold.addEventListener("click", function(){


    if(gamestate == true){
        score[currentplayer] += accuRandNum;
        document.querySelector(`.score-${currentplayer}`).textContent = score[currentplayer];
    
        if(score[currentplayer] >= 100){
            
           // currentplayer wins the game
    
           document.querySelector(`.player-${currentplayer}`).classList.add("winner");
           document.querySelector(`.name-${currentplayer}`).textContent = "winner⭐⭐⭐";
    
           gamestate = false;
        }else{
            switchplayer();
        }
    
    }


});


document.querySelector(".btn-new").addEventListener("click", init);
    
function init(){
    window.location.reload();
}