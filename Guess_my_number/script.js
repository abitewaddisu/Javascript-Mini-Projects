const againBtn = document.querySelector(".again")
const checkBtn = document.querySelector(".check")
const messageDisplay = document.querySelector(".message")
const scoreDisplay = document.querySelector(".score")
const highScoreDisplay = document.querySelector(".highscore")
const input = document.querySelector("input")
const randomDisplay = document.querySelector('.number')
const body = document.querySelector("body")

let ran = Math.floor(Math.random()*19) + 1;

let score = 20;
let highScore = 0

function check(){
    if (input.value.length > 0){
        if (score == 0 && input.value != ran) {
            messageDisplay.innerText = "You lost!"
            body.style.backgroundColor = "red"
            input.readOnly = true
            checkBtn.removeEventListener('click', check)
            checkBtn.style.backgroundColor = 'grey'
        } else if (Number(input.value) > 0 && Number(input.value) < 21){
            if (input.value == ran){
                randomDisplay.textContent = ran;
                randomDisplay.style.width = '30rem';
                messageDisplay.innerText = "Correct number!"
                body.style.backgroundColor = "green"
                input.readOnly = true
                checkBtn.removeEventListener('click', check)
                checkBtn.style.backgroundColor = 'grey'
            } else {
                if(input.value > ran){
                    messageDisplay.innerText = "Too high"
                }else if(input.value < ran){
                    messageDisplay.innerText = "Too Low"
                }
                score--
                scoreDisplay.innerText = score
                input.value = ""
            }
        } else {
            messageDisplay.innerText = "Only numbers 1-20"
            input.value = ""
        }
    } else {
        messageDisplay.innerText = 'Enter a number'
    }
}

checkBtn.addEventListener("click", check)

function reset(){
    console.log(input.value, ran)
    console.log(score, highScore)
    if (highScore < score && input.value == ran){
        highScore = score
        highScoreDisplay.innerText = highScore
    }
    checkBtn.addEventListener("click", check)
    checkBtn.style.backgroundColor = 'white'
    ran = Math.floor(Math.random()*19) + 1
    input.readOnly = false
    score = 20
    scoreDisplay.innerText = score
    body.style.backgroundColor = "black"
    messageDisplay.innerText = 'Start guessing...'
    randomDisplay.style.width = '16rem'
    input.value = ''
}

againBtn.addEventListener("click", reset)


Math.random()