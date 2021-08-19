/* BINGO CHALLENGE!!!
Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.
Create a button to randomize a number from 1 to 76. The same number should be highlighted on the bingo board

EXTRA: 
- Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)
- Create a USER BOARD with 24 randomized numbers that highlights as the main board does
- Let the user choose HOW MANY user boards he's willing to play with and create them.
 */

const displayCells = function () {
  let cellContainerNode = document.getElementById("cells-container");
  alert(
    "This is a board game! you can either pick random numbers or click the button below to generate random numbers. Click on Ok to continue!!"
  );

  for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
    let newCellNode = document.createElement("div");
    newCellNode.innerText = cellNumber;
    //newCellNode.id = cellNumber;
    newCellNode.classList.add("cell");

    newCellNode.onclick = highlightSelectedNUm;

    cellContainerNode.appendChild(newCellNode);
  }

  cellContainerNode.style.borderWidth = "12px";
};

let randomNUm = function (eventData) {
  let randomNumber = Math.floor(Math.random() * 76 + 1);
  console.log(randomNumber);
  return randomNumber;
};

let currentlyRandomonizedNUm;

let highlightSelectedNUm = function (eventData) {
  let randomonizedNum = eventData.target;
  randomonizedNum.classList.add("random");
  randomNUm();
};

const getRandomonizedNum = function () {};

/* const selectRandom = function (eventData) {
  // DESELECT THE CURRENTLY SELECTED DAY, IF ANY
  let currentlySelectedNum = randomNUm(); // Look for any "selected" day in the page...
  if (currentlySelectedNum !== null) {
    // ...if there is any selected day...
    currentlySelectedNum.classList.remove(); // ...we remove the "selected" class from it
  }
}; */

window.onload = function () {};
