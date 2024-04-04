const body = document.querySelector("body");
const container = document.querySelector(".container");

const button = document.createElement("button");
button.textContent = "click to change the number of square";
body.appendChild(button);

createSquare(16);  //initial setting 16X16 square

createColor();

button.addEventListener("click", () => {
  let numberSquare = parseInt(prompt("Insert a number between 1 and 100:"));
  const row = document.querySelectorAll(".row");
  row.forEach(row => {
    row.remove();
  });
  createSquare(numberSquare);
  createColor();
});


function createSquare(numberSquare) {
  for (let i = 0; i < numberSquare; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    for (let j = 0; j < numberSquare; j++) {
      const square = document.createElement("div");
      square.setAttribute("id", "square");
      row.appendChild(square);
    }
  }
}

function createColor() {
  const square = document.querySelectorAll("#square");
  square.forEach(square => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = randomColor();
    });
  });
}

function randomColor() {
  function random() {
    const result = Math.floor(Math.random() * 255);
    return result;
  }
  return "rgb(" + random() + "," + random() + "," + random() + ")";
}