//variables for game state
let playerOneScore = 5
let playerTwoScore = 7
let playerOneTurn = true

let playerOneDice = document.getElementById("player1Dice")
let playerTwoDice = document.getElementById("player2Dice")

const playerOneScoreboard = document.getElementById("player1Scoreboard")
const playerTwoScoreboard = document.getElementById("player2Scoreboard")

const message = document.getElementById("message")

const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")






rollBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)

    if (playerOneTurn) {
        playerOneDice.textContent = randomNumber
        message.textContent = "Player Two's Turn"

    } else {
        playerTwoDice.textContent = randomNumber
        message.textContent = "Player One's Turn"
    }

    playerOneDice.classList.toggle("active")
    playerTwoDice.classList.toggle("active")

    playerOneTurn = !playerOneTurn
})