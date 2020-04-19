const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let time = 60
let hitPosition = null
let moveMoleTimer = null
let countDownTimer = null

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole') // Remove the moles that remains on the grid
    })
    let randomPosition = square[Math.floor(Math.random() * 9)] // Get a random position
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id // Get the position of the mole appearing
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition && time != 0) {
            result = result + 1
            score.textContent = result
            randomSquare()
        }
    })
})

function moveMole() {
    moveMoleTimer = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    time = time - 1
    timeLeft.textContent = time
    if (time === 0) {
        clearInterval(countDownTimer)
        clearInterval(moveMoleTimer)
        alert('Game Over! Your final score is ' + result)
    }
}

countDownTimer = setInterval(countDown, 1000)
