const squares = document.querySelectorAll(".square");
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    });

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole')

    hitPosition =randomSquare.id;
}

randomSquare()

squares.forEach(square =>{
    square.addEventListener('mousedown' ,() =>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition=null;
        }
    })
});
function moveMole(){                                                                                   
        timerId = setInterval(randomSquare,1000)
}
moveMole()
let countDowmTimerId;
function countDown(){
   currentTime--;
   console.log(currentTime)
   timeLeft.textContent = currentTime;
   if(currentTime==0){
    clearInterval(countDowmTimerId)
    clearInterval(timerId)
    alert('Game Over! Your final score is '+result)
   }
}

countDowmTimerId = setInterval(countDown,1000)