let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#re");
let newGamb = document.querySelector("#newbutton");
let messageContainer = document.querySelector(".messageContainer");
let message = document.querySelector("#message");
let turn0 = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = 'X';
            turn0 = false;
            box.disabled = true;
        } else {
            box.innerText = 'O';
            turn0 = true;
            box.disabled = true;
        }
        checkWinner();
    });
});

const showWinner = (winner) => {
    message.innerText = `Congratulations, winner is ${winner}`;
    messageContainer.classList.remove("hide");
};

const checkWinner =() =>{
    for(let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
       
        if (position1!= "" && position2 != "" && position3!= ""){
            if(position1 === position2 && position2 === position3){
                console.log("winner",position1);
                showWinner(position1);
            }
        }
    }
};

// Add event listeners to the reset and new game buttons
resetb.addEventListener("click", () => {
    // Reset the game state
    turn0 = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    messageContainer.classList.add("hide");
});

newGamb.addEventListener("click", () => {
    // Reset the game state and start a new game
    turn0 = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    messageContainer.classList.add("hide");
});