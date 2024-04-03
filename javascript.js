const container = document.querySelector(".container");
const body = document.querySelector("body");


for (let i = 0; i < 16; i++) {
  let theDiv = document.createElement("div");
  theDiv.setAttribute("class", "row");
  container.appendChild(theDiv);
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.setAttribute("id", "square")
    theDiv.appendChild(square);
  }
}

const square = document.querySelectorAll("#square");
console.log(square);
square.forEach(square => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = randomColor();
  });
});




function randomColor() {
  function random() {
    const result = Math.floor(Math.random() * 255);
    return result;
  }
  return "rgb(" + random() + "," + random() + "," + random() + ")";
}