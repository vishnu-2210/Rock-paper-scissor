let userScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".option");
const userScorep = document.querySelector("#You");
const compScorep = document.querySelector("#Computer");

const random = () => {
  let choices = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
};
const message = document.getElementById("message");

const reflectWinner = (userWin, userOption, compOption) => {
  if (userWin) {
    console.log("You Won");
    userScore++;
    message.innerText = `You Win! Your ${userOption} beats ${compOption}`;
    message.style.backgroundColor = "green";
    userScorep.innerText = userScore;
  } else {
    console.log("Computer Won");
    computerScore++;
    message.innerText = `Computer Won!! Computers ${compOption} beats ${userOption}`;
    message.style.backgroundColor = "red";
    compScorep.innerText = computerScore;
  }
};
const draw = () => {
  console.log("Game Was Draw");
  message.innerText = "Draw! Try Again";
  message.style.backgroundColor = "black";
};
const computerGame = (userOption) => {
  const compOption = random();
  console.log("Comp Choice is " + compOption);
  if (userOption === compOption) {
    draw();
  } else {
    let userWin = true;
    if (userOption === "rock") {
      userWin = compOption === "paper" ? false : true;
    } else if (userOption === "paper") {
      userWin = compOption === "scissor" ? false : true;
    } else {
      userWin = compOption === "rock" ? false : true;
    }
    reflectWinner(userWin, userOption, compOption);
  }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const userOption = option.getAttribute("id");
    console.log("Your Choice is " + userOption);
    computerGame(userOption);
  });
});
