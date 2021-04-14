const statusDisplay = document.querySelector(".game-status");
let gameActive = true;
let currentPlayer = "X";
let colorPlayer = "#5D9CEC";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Người chơi ${currentPlayer} đã thắng!`;
const drawMessage = () => `Tỷ số hòa!`;
const currentPlayerTurn = () => `Đến lượt ${currentPlayer}`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
  clickedCell.style.backgroundColor = colorPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  colorPlayer = colorPlayer == "#5D9CEC" ? "#ED5565" : "#5D9CEC";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] === "" || gameState[b] === "" || gameState[c] === "") {
      continue;
    }
    if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick() {
  const clickedCellIndex = parseInt(this.getAttribute("data-cell-index"));
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }
  handleCellPlayed(this, clickedCellIndex);
  handleResultValidation();
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach(function (cell) {
    cell.innerHTML = "";
    cell.style.backgroundColor = "";
  });
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
  .querySelector(".game-restart")
  .addEventListener("click", handleRestartGame);
