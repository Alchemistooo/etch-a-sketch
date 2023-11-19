let container = document.querySelector('.container');
let newGridBtn = document.querySelector('.newGrid');
const containerSize = container.offsetWidth;
let sizePrompt;

// Get valid user input for grid size
function userGridSize() {
  sizePrompt = prompt("Pick a grid square size from 1-100");
  let check = true;
  
  while (check) {
    if (sizePrompt === null) break;

    if (Number.isNaN(+sizePrompt)) {
      sizePrompt = prompt("Make sure to pick a number that is in range!");
    } else if (+sizePrompt < 1 || +sizePrompt > 100) {
      sizePrompt = prompt("Make sure to pick a number that is in range!");
    } else {
        check = false;
    }
  }
}


// Remove child elements from container, removing the grid
function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Make a single div/pixel
function createDiv() {
  const newDiv = document.createElement('div');
  const divSize = (containerSize / sizePrompt).toString() + "px";
  newDiv.style.cssText = `height: ${divSize}; width: ${divSize}`;
  newDiv.classList.add('gridDiv');
  container.appendChild(newDiv);
}

// Fill the entire grid with divs/pixels
function fillGrid() {
  let divAmount = sizePrompt ** 2;
  let divCounter = divAmount;
  
  while (divCounter > 0){
    createDiv();
    divCounter--;
  }
}

// Paint brush
container.addEventListener('mouseover', event => {
  if (container.firstChild) {
  let target = event.target;
  target.style.backgroundColor = 'purple';
  }
})

// Reset the grid and define new size
newGridBtn.addEventListener('click', () => {
  userGridSize();

  if (sizePrompt === null) return;

  if (container.firstChild){
    removeGrid();
  }
  
  fillGrid();
})
