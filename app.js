const squares = document.querySelectorAll('.square')
const frog = document.querySelector('.frog')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('frog')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('frog')
}

randomSquare()