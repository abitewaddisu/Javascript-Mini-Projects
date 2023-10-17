const steps = document.getElementsByClassName('step')
const connectors = document.getElementsByClassName('connector')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let step = 0;

function update() {
    for (let i = 0; i < steps.length; i++) {
        if (i <= step) {
            steps[i].classList.add('active-step')
            if (i > 0) {
                connectors[i-1].classList.add('active-connector')
            }
        } else {
            steps[i].classList.remove('active-step')
            connectors[i-1].classList.remove('active-connector')
        }
    }
}

function increase() {
    if (step == 0) {
        prevBtn.addEventListener('click', decrease)
        prevBtn.classList.add('active-btn')
    }
    step += 1;
    update()
    if (step == 3) {
        nextBtn.removeEventListener('click', increase)
        nextBtn.classList.remove('active-btn')
    }
}

nextBtn.addEventListener('click', increase)

function decrease() {
    if (step == 3) {
        nextBtn.addEventListener('click', increase)
        nextBtn.classList.add('active-btn')
    }
    step -= 1;
    update();
    if (step == 0) {
        prevBtn.classList.remove('active-btn')
        prevBtn.removeEventListener('click', decrease)
    }
}