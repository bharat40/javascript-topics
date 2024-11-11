let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#newGame-btn");
let msg = document.querySelector("#msg");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// playerX, playerO
let turnO = true;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const unableboxes = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            // check winning pattern
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Congratulations!", pos1Val, "you are the winner");
                showWinner(pos1Val);
                disableboxes();
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations ${winner}, you are the winner`;
    msgContainer.classList.remove("hide");
}

const resetGame = () => {
    turnO = true;
    unableboxes();
    msgContainer.classList.add("hide"); 
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);