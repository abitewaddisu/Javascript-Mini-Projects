const text = document.querySelector('.loading-text')
const bg = document.querySelector('.bg-img')

let load = 0;

let int = setInterval(blurring, 30)

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int)
    }
    text.textContent = `${load}%`
    text.style.opacity = 1-(load/100)

    bg.style.filter = `blur(${10 - (load/10)}px)`
}