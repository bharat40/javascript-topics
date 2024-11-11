let themeBtn = document.querySelector("#theme-btn");
let scoreBoard = document.querySelector(".score-container");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let choice = document.querySelectorAll(".choice");
let mssg = document.querySelector("#mssg");
let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let resetBtn = document.querySelector("#reset");

// theme
let currTheme = "light";
themeBtn.addEventListener("click", () => {
    if (currTheme === "light") {
        currTheme = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        scoreBoard.style.color = "white";
        themeBtn.style.backgroundColor = "white";
        themeBtn.style.color = "black";
        resetBtn.style.backgroundColor = "white";
        resetBtn.style.color = "black";
        mssg.style.backgroundColor = "white";
        mssg.style.color = "black"
        themeBtn.innerText = "Light Mode";
    }
    else {
        currTheme = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        scoreBoard.style.color = "black";
        themeBtn.style.backgroundColor = "black";
        themeBtn.style.color = "white";
        resetBtn.style.backgroundColor = "black";
        resetBtn.style.color = "white";
        mssg.style.backgroundColor = "black";
        mssg.style.color = "white"
        themeBtn.innerHTML = "Dark Mode";
    }
})

// game logic



const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

let drawGame = () => {
    mssg.innerText = "Draw";
    mssg.style.backgroundColor = "gray";
}

let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        mssg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        mssg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        mssg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const resetScore = () => {
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    userScore = 0;
    compScore = 0;
    if (currTheme) {
        mssg.innerText = "Play your move";
        mssg.style.backgroundColor = "black";
        mssg.style.color = "white";
    }
    else {
        mssg.innerText = "Play your move";
        mssg.style.backgroundColor = "white";
        mssg.style.color = "black";
    }
}
resetBtn.addEventListener("click", resetScore);