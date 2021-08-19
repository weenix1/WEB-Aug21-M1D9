const displayCells = function () {
  let cellContainerNode = document.getElementById("cells-container");

  for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
    let newCellNode = document.createElement("div");
    newCellNode.innerText = cellNumber;
    newCellNode.classList.add("cell");
    cellContainerNode.appendChild(newCellNode);
  }
};

window.onload = function () {};
