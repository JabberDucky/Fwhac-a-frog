const squares = document.querySelectorAll('.square')
const frog = document.querySelector('.frog')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton = document.querySelector('#start-button')

let result = 0
let hitPostition
let currentTime = 10
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('frog')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('frog')

    hitPostition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostition) {
            result++
            score.textContent = result
            hitPostition = null
        }
    })
})

function moveFrog() {
    timerId = setInterval (randomSquare, 1000)
}

moveFrog()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAMEOVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)

startButton.addEventListener('click', () => {
    moveFrog(); // Start the game
    startButton.disabled = true; // Disable the button to prevent multiple game starts
});