let container = document.querySelector('.container');

let sizePrompt = prompt("Pick a grid square size from 1-100");
const containerSize = container.offsetWidth;
let divSize = (containerSize / sizePrompt).toString() + "px";

function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.style.cssText = `height: ${divSize}; width ${divSize}; background-color: white`;
  newDiv.style.width = divSize;
  container.appendChild(newDiv);
}
createDiv()


function fillGrid() {
  
}
