//variables for game state
let playerOneScore = 0
let playerTwoScore = 0
let playerOneTurn = true

let OneFlame = 1
let TwoFlame = 1

const playerOneDice = document.getElementById("player1Dice")
const playerTwoDice = document.getElementById("player2Dice")

const playerOneFlame = document.getElementById("player1Flame")
const playerTwoFlame = document.getElementById("player2Flame")

const flameScored = document.getElementById("flameScored")
const flameScore = document.getElementById("flameScore")
const flameHighScore = document.getElementById("flameHighScore")

const playerOneScoreboard = document.getElementById("player1Scoreboard")
const playerTwoScoreboard = document.getElementById("player2Scoreboard")

const message = document.getElementById("message")

const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")



function activatePlayerOneFlame() {
    if (playerOneScore > 0 && playerOneTurn) {
        playerOneFlame.classList.toggle("active")
        console.log("clicked")
    }
    console.log(playerOneScore)
    console.log(playerOneTurn)
    console.log(playerOneFlame.classList)
}


function activatePlayerTwoFlame() {


    if (!playerOneTurn) {playerTwoFlame.classList.toggle("active")}
    console.log(playerTwoFlame.classList)
}

playerOneFlame.addEventListener("click", activatePlayerOneFlame)
playerTwoFlame.addEventListener("click", activatePlayerTwoFlame)

rollBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (playerOneTurn) {

        playerOneDice.textContent = randomNumber
        message.textContent = "Player Two's Turn"

        if (playerOneFlame.classList.contains("active")) {
            playerOneScoreboard.textContent = playerOneScore += (randomNumber * 2)
            playerOneFlame.classList.add("used")
            playerOneFlame.classList.toggle("active")
            playerOneFlame.style.cursor = "default"
            playerOneDice.style.color = "orange"
            flameScored.style.visibility = "visible"
            flameScore.textContent = randomNumber * 2
            if (flameScore.textContent >= 4) {
                flameScore.textContent = `Doubled ${randomNumber} NICE!`
            }
            setTimeout(() => {
                playerOneDice.style.color = "black"
                flameScored.style.visibility = "hidden"
            },1500)
        } else {
            playerOneScoreboard.textContent = playerOneScore += randomNumber
        }

    } else {
        playerTwoDice.textContent = randomNumber
        message.textContent = "Player One's Turn"

        if (playerTwoFlame.classList.contains("active")) {
            playerTwoScoreboard.textContent = playerTwoScore += (randomNumber * 2)
            playerTwoFlame.classList.add("used")
            playerTwoFlame.classList.toggle("active")
            playerTwoFlame.style.cursor = "default"
            playerTwoDice.style.color = "orange"
            flameScored.style.visibility = "visible"
            flameScore.textContent = randomNumber * 2
            if (flameScore.textContent >= 4) {
                flameScore.textContent = `Doubled ${randomNumber} NICE!`
            }
            setTimeout(() => {
                playerTwoDice.style.color = "black"
                flameScored.style.visibility = "hidden"
            },1500)
        } else {
            playerTwoScoreboard.textContent = playerTwoScore += randomNumber
        }

    }
    
    playerOneDice.classList.toggle("active")
    playerTwoDice.classList.toggle("active")

    playerOneTurn = !playerOneTurn

    if (playerOneScore >= 20) {
        message.textContent = "Player One is the Winner!"
        rollBtn.style.display = "none"
        resetBtn.style.display = "inline"
    }
    if (playerTwoScore >= 20) {
        message.textContent = "Player Two is the Winner!"
        rollBtn.style.display = "none"
        resetBtn.style.display = "inline"
    }
})

resetBtn.addEventListener("click", () => {
    playerOneTurn = true
    playerOneScore = 0
    playerTwoScore = 0
    playerOneScoreboard.textContent = 0
    playerTwoScoreboard.textContent = 0
    playerOneDice.textContent = "-"
    playerTwoDice.textContent = "-"

    message.textContent = "Player One's Turn"

    rollBtn.style.display = "inline"
    resetBtn.style.display = "none"

    playerOneFlame.classList.remove("used")
    

    playerTwoFlame.classList.remove("used")
})