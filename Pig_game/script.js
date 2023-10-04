player0Display = document.querySelector('.player--0')
player1Display = document.querySelector('.player--1')
rollBtn = document.querySelector('.btn--roll')
holdBtn = document.querySelector('.btn--hold')
newBtn = document.querySelector('.btn--new')
diceDisplay = document.querySelector('.dice')
curScore0Display = document.querySelector('#current--0')
curScore1Display = document.querySelector('#current--1')
totalScore0Display = document.querySelector('#score--0')
totalScore1Display = document.querySelector('#score--1')
name0Display = document.querySelector('#name--0')
name1Display = document.querySelector('#name--1')

let rndm;
let curPlayer = 0;
let curScore = 0;
const scores = [0, 0]

function addToCurrent() {
    curScore += rndm;
}
function displayDice() {
    if (diceDisplay.classList.contains('hidden')) {
        diceDisplay.classList.remove('hidden')
    }
    diceDisplay.src = `./img/dice-${rndm}.png`
}
function displayCurrentScore() {
    if (curPlayer == 0) {
        curScore0Display.innerText = curScore;
    } else {
        curScore1Display.innerText = curScore;
    }
}
const switchPlayer = () => {
    curScore = 0
    displayCurrentScore()
    curPlayer = (curPlayer+1)%2
    if (curPlayer == 0) {
        player0Display.classList.add('player--active')
        player1Display.classList.remove('player--active')
    } else {
        player0Display.classList.remove('player--active')
        player1Display.classList.add('player--active')
    }
}

const roll = () => {
    rndm = Math.trunc(Math.random() * 6) + 1;
    displayDice()
    if (rndm == 1) {
        switchPlayer()
    } else {
        addToCurrent()
        displayCurrentScore()
    }
}

const addCurrentToTotal = () => {
    scores[curPlayer] += curScore
}
const displayScore = () => {
    totalScore0Display.innerText = scores[0]
    totalScore1Display.innerText = scores[1]
}
const gameOver = () => {
    rollBtn.removeEventListener('click', roll)
    holdBtn.removeEventListener('click', hold)
    if (curPlayer==0) {
        player0Display.classList.add('winner')
        name0Display.style.color = '#c7365f'
    } else {
        player1Display.classList.add('winner')
        name1Display.style.color = '#c7365f'
    }
    diceDisplay.classList.add('hidden')
}

const hold = () => {
    addCurrentToTotal()
    displayScore()
    if (scores[curPlayer] >= 20) {
        gameOver()
    } else {
        switchPlayer()
    }
}

const reset = () => {
    scores[0] = 0
    scores[1] = 0
    curScore = 0
    curPlayer = 0
    displayScore()
    curScore0Display.innerText = 0
    curScore1Display.innerText = 0
    diceDisplay.classList.add('hidden')
    rollBtn.addEventListener('click', roll)
    holdBtn.addEventListener('click', hold)
    player0Display.classList.remove('winner')
    player1Display.classList.remove('winner')
    player0Display.classList.add('player--active')
    player1Display.classList.remove('player--active')
}
reset()

newBtn.addEventListener('click', reset)
