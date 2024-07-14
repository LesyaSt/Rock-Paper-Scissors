let buttonClose = document.getElementById("lol");
let rules = document.getElementById("rulesDesktop");
let showRules = document.getElementById("show");
//

let bonusClose = document.getElementById("lol-bonus");
let bonusRules = document.getElementById("bonRul");
let showBonus = document.getElementById("bonus");

//

let triangle = document.getElementById("tres");

//
showRules.addEventListener("click", function () {
  rules.style.display = "flex";
});

buttonClose.addEventListener("click", function () {
  rules.style.display = "none";
});


//
//
//
//

const paper = document.getElementById("button-paper");
const scissors = document.getElementById("button-scissors");
const rock = document.getElementById("button-rock");

const game = document.getElementById("game-three");
const first = document.getElementById("first");
const two = document.getElementById("two");
const secondDo = document.getElementById("choices");

const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const computerRock = document.getElementById("computer-rock");

const computerGuest = document.getElementById("computer-guest");
const win = document.getElementById('result-win');
const lose = document.getElementById('result-lose');
const draw = document.getElementById('result-draw');


const inputScore = document.getElementById('counter-score');
const winDesktop = document.querySelector(".score");

const resultDesktop = document.getElementById("resultDesk");
const buttonPlayAgain = document.getElementById("btn-again");

const container = document.getElementById('container');

const oneShadow = document.getElementById('firstWinner');
const twoShadow = document.getElementById('twoWinner');
const threeShadow = document.getElementById('threeWinner');

const paperShadow = document.getElementById('computer-paper-winner');
const scissorsShadow =document.getElementById('computer-scissors-winner');
const rockShadow = document.getElementById('computer-rock-winner');
// 
let winCount = 0;

function updateScore(){
    winCount++;
    inputScore.value = winCount;
}

function minusScore(){
    winCount--;
    inputScore.value = winCount;
}

paper.addEventListener("click", function () {
  game.style.display = "none";
  secondDo.style.display = "grid";
  first.style.display = "flex";
});

scissors.addEventListener("click", function () {
  game.style.display = "none";
  secondDo.style.display = "grid";
  two.style.display = "flex";
});

rock.addEventListener("click", function () {
  game.style.display = "none";
  secondDo.style.display = "grid";
  three.style.display = "flex";
});



const elements = document.querySelectorAll(
  ".choose-one",
  ".choose-two",
  ".choose-three"
);

const randomGuest = Array.from(elements);

paper.addEventListener("click", function () {
  play('paper');
});

scissors.addEventListener("click", function () {
  play('scissors');
});

rock.addEventListener("click", function () {
  play('rock');
});
// 
// 
computerPaper.addEventListener("click", function () {
    play('paper');
  });
  
  computerScissors.addEventListener("click", function () {
    play('scissors');
  });
  
  computerRock.addEventListener("click", function () {
    play('rock');
  });
// 
// 


buttonPlayAgain.addEventListener("click", function () {
//   game
    game.style.display = "flex";
    // picked
  secondDo.style.display = "none";
//   result-desktop
  resultDesktop.style.display = "none";
container.style.display = "flex";
  win.style.display = "none";
  lose.style.display = "none";
draw.style.display = "none"
//   
first.style.display = "none";
two.style.display = "none";
three.style.display = "none";
// 
computerPaper.style.display = "none";
computerScissors.style.display = "none";
computerRock.style.display = "none";
// 
oneShadow.classList.remove("winner");
twoShadow.classList.remove("winner");
threeShadow.classList.remove("winner");
// 
paperShadow.classList.remove("winner");
scissorsShadow.classList.remove("winner");
rockShadow.classList.remove("winner");
});


function getComputerChoice() {
  const choices = ['computerPaper', 'computerScissors', 'computerRock'];

  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(userChoice) {
  const computerChoice = getComputerChoice();

computerPaper.style.display = "none";
computerScissors.style.display = "none";
computerRock.style.display = "none";

  if (computerChoice === "computerPaper") {
    win.style.display = "none";
    lose.style.display = "none";
    draw.style.display = "flex";
    oneShadow.classList.remove("winner");
twoShadow.classList.remove("winner");
threeShadow.classList.remove("winner");
// 
paperShadow.classList.remove("winner");
scissorsShadow.classList.remove("winner");
rockShadow.classList.remove("winner");
    computerPaper.style.display = "flex";
    
  } else if (computerChoice === "computerScissors") {
    computerScissors.style.display = "flex";
  } else if (computerChoice === "computerRock") {
    computerRock.style.display = "flex";
  } 

  game.style.display = "none";
  secondDo.style.display = "fixed";
  resultDesktop.style.display = "flex";
  buttonPlayAgain.style.display = "flex";
  
  if ((userChoice === 'rock' && computerChoice === 'computerRock') ||
  (userChoice === 'scissors' && computerChoice === 'computerScissors') ||
  (userChoice === 'paper' && computerChoice === 'computerPaper')) {
    win.style.display = "none";
    lose.style.display = "none";
    draw.style.display = "flex";
    container.style.display = "none";
    
    buttonPlayAgain.style.display = "flex";
    oneShadow.classList.remove("winner");
    twoShadow.classList.remove("winner");
    threeShadow.classList.remove("winner");
    paperShadow.classList.remove("winner");
scissorsShadow.classList.remove("winner");
rockShadow.classList.remove("winner");
    
  } else if (
    (userChoice === 'rock' && computerChoice === 'computerScissors') ||
    (userChoice === 'scissors' && computerChoice === 'computerPaper') ||
    (userChoice === 'paper' && computerChoice === 'computerRock') 
   
  ) {
    win.style.display = "flex";
    lose.style.display = "none";
    draw.style.display = "none";
    container.style.display = "none";
    // 
    oneShadow.classList.add("winner");
    twoShadow.classList.add("winner");
    threeShadow.classList.add("winner");
    paperShadow.classList.remove("winner");
scissorsShadow.classList.remove("winner");
rockShadow.classList.remove("winner");
    updateScore();
  } else {
    win.style.display = "none";
    lose.style.display = "flex";
    draw.style.display = "none";
    container.style.display = "none";
    oneShadow.classList.remove("winner");
twoShadow.classList.remove("winner");
threeShadow.classList.remove("winner");
    paperShadow.classList.add("winner");
scissorsShadow.classList.add("winner");
rockShadow.classList.add("winner");
    minusScore();
  }
}
