let yourScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userPick = document.getElementById("userchoice");
const compPick = document.getElementById("compchoice");

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const compChoice = function () {
  const choice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
};

const drawGame = () => {
  console.log("Game Draw");
  msg.innerText = "Game Draw! Play Again";
  msg.style.color = "black";
};

const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You Win!";
    msg.style.color = "green";
  } else {
    msg.innerText = "You Lose";
    msg.style.color = "red";
  }
};

const playGame = (userChoice) => {
  userPick.innerText = userChoice;
  const computerChoic = compChoice();
  compPick.innerText = computerChoic;

  if (userChoice === computerChoic) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // scissors,paper
      userWin = computerChoic === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = computerChoic === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = computerChoic === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
