const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const container = document.querySelector('.container')
const menu = document.querySelector('.menu')

openBtn.addEventListener('click', () => {
    container.classList.add('active')
    menu.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    container.classList.remove('active')
    menu.classList.remove('active')
})
