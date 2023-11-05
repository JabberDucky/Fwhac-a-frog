const squares = document.querySelectorAll('.square')
const frog = document.querySelector('.frog')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPostition

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
    let timerId = null
    timerId = setInterval (randomSquare, 500)
}

moveFrog()