// Card image list (10 pairs)

const cardImages = [
  "assets/images/img1.png",
  "assets/images/img2.png",
  "assets/images/img3.png",
  "assets/images/img4.png",
  "assets/images/img5.png",
  "assets/images/img6.png",
  "assets/images/img7.png",
  "assets/images/img8.png",
  "assets/images/img9.png",
  "assets/images/img10.png"
];

// Duplicate to create pairs → total 20 cards
let cardsArray = [...cardImages, ...cardImages];
let totalPairs = cardImages.length;

// Shuffle helper
function shuffleCards() {
  cardsArray.sort(() => Math.random() - 0.5);
}


// DOM elements
 
const grid = document.getElementById("cards-grid");
const restartBtn = document.getElementById("restart-button");
const resetAllBtn = document.getElementById("reset-all-button");
const statusMessage = document.getElementById("status-message");

const p1Score = document.getElementById("player-1-score");
const p2Score = document.getElementById("player-2-score");
const p1Wins = document.getElementById("player-1-total-wins");
const p2Wins = document.getElementById("player-2-total-wins");

const p1Panel = document.getElementById("player-1-panel");
const p2Panel = document.getElementById("player-2-panel");

const p1NameInput = document.getElementById("player-1-name");
const p2NameInput = document.getElementById("player-2-name");

// Game state

let flippedCards = [];
let lockBoard = false;
let currentPlayer = 1;
let matchesFound = 0;

// Helpers

function getPlayerName(playerNumber) {
  if (playerNumber === 1) {
    return p1NameInput.value.trim() || "Player 1";
  }
  return p2NameInput.value.trim() || "Player 2";
}

function updateActivePlayerUI() {
  if (currentPlayer === 1) {
    p1Panel.classList.add("player-panel--active");
    p2Panel.classList.remove("player-panel--active");
  } else {
    p2Panel.classList.add("player-panel--active");
    p1Panel.classList.remove("player-panel--active");
  }
}

function updateStatusTurnMessage() {
  const name = getPlayerName(currentPlayer);
  statusMessage.textContent = `${name}, it’s your turn. Flip two cards!`;
}
