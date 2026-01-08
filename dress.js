// ====== SELECT ELEMENTS ======
const myAudio = document.querySelector("#myAudio");
const startButton = document.querySelector("#startButton");
const startScreen = document.querySelector("#startScreen");
const gameContent = document.querySelector("#gameContent");

// Character clothing images
const pants = document.querySelector("#pants");
const shirt = document.querySelector("#shirt");

// Pants buttons
const pants1Button = document.querySelector("#pants1Button");
const pants2Button = document.querySelector("#pants2Button");
const noPantsButton = document.querySelector("#noPantsButton");

// Shirt buttons
const shirt1Button = document.querySelector("#shirt1Button");
const shirt2Button = document.querySelector("#shirt2Button");
const noShirtButton = document.querySelector("#noShirtButton");

let gameStarted = false;

// ====== FUNCTIONS ======

// Make clothing appear
function showClothing(clothingItem, imagePath) {
  clothingItem.src = imagePath;
  clothingItem.classList.remove("hidden");
}

// Hide clothing
function hideClothing(clothingItem) {
  clothingItem.classList.add("hidden");
}

// Start the game
function startGame() {
  if (!gameStarted) {
    gameStarted = true;

    myAudio.play();

    startScreen.classList.add("hidden");
    gameContent.classList.remove("hidden");
  }
}

// ====== EVENT LISTENERS ======

// Start button
startButton.addEventListener("click", startGame);

// ---- Pants ----
pants1Button.addEventListener("click", function () {
  showClothing(pants, "images/pants1.png");
});

pants2Button.addEventListener("click", function () {
  showClothing(pants, "images/pants2.png");
});

noPantsButton.addEventListener("click", function () {
  hideClothing(pants);
});

// ---- Shirts ----
shirt1Button.addEventListener("click", function () {
  showClothing(shirt, "images/tshirt1.png");
});

shirt2Button.addEventListener("click", function () {
  showClothing(shirt, "images/tshirt2.png");
});

noShirtButton.addEventListener("click", function () {
  hideClothing(shirt);
});
