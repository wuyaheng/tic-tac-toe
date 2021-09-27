var boxes = document.getElementsByClassName("box");
var emptyBoxes = []

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function (event) {
        boxes[i].textContent = "X"
        findEmptyBoxes()
        checkForVictory()
        computerTurn()
        findEmptyBoxes()
        checkForVictory()
    })
}

function findEmptyBoxes() {
    emptyBoxes = []
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === "") {
            emptyBoxes.push(boxes[i])
        }
    }
}

function computerTurn() {
    let computerChoice = Math.floor(Math.random() * emptyBoxes.length);
    emptyBoxes[computerChoice].textContent = "O"
}



function checkForVictory() {
    if (
        (boxes[0].textContent == "X" && boxes[1].textContent == "X" && boxes[2].textContent == "X") 
    || (boxes[3].textContent == "X" && boxes[4].textContent == "X" && boxes[5].textContent == "X")
    || (boxes[6].textContent == "X" && boxes[7].textContent == "X" && boxes[8].textContent == "X")
    || (boxes[0].textContent == "X" && boxes[3].textContent == "X" && boxes[6].textContent == "X")
    || (boxes[1].textContent == "X" && boxes[4].textContent == "X" && boxes[7].textContent == "X")
    || (boxes[2].textContent == "X" && boxes[5].textContent == "X" && boxes[8].textContent == "X")
    || (boxes[0].textContent == "X" && boxes[4].textContent == "X" && boxes[8].textContent == "X")
    || (boxes[2].textContent == "X" && boxes[4].textContent == "X" && boxes[6].textContent == "X")
    ) {
        alert("You win!")
    } else if (
        (boxes[0].textContent == "O" && boxes[1].textContent == "O" && boxes[2].textContent == "O") 
        || (boxes[3].textContent == "O" && boxes[4].textContent == "O" && boxes[5].textContent == "O")
        || (boxes[6].textContent == "O" && boxes[7].textContent == "O" && boxes[8].textContent == "O")
        || (boxes[0].textContent == "O" && boxes[3].textContent == "O" && boxes[6].textContent == "O")
        || (boxes[1].textContent == "O" && boxes[4].textContent == "O" && boxes[7].textContent == "O")
        || (boxes[2].textContent == "O" && boxes[5].textContent == "O" && boxes[8].textContent == "O")
        || (boxes[0].textContent == "O" && boxes[4].textContent == "O" && boxes[8].textContent == "O")
        || (boxes[2].textContent == "O" && boxes[4].textContent == "O" && boxes[6].textContent == "O")
    ) {
        alert("Computer win!")
    } else if(emptyBoxes.length == 0) {
            alert("It's a tie!")
        }
    
}
