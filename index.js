let color = "black";
let click = false;

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //this makes a 16x16 column
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}
populateBoard(16);
let error = document.querySelector(".error");
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    error.style.display = "none";
    populateBoard(input);
  } else {
    error.style.display = "flex";
    error.textContent = "Input must be between 2 and 100";
  }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%,50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetSquare() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
let mode = document.querySelector(".mode");
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      mode.textContent = "Mode: Coloring!";
    } else {
      mode.textContent = "Mode: Not coloring :(";
    }
  }
});
