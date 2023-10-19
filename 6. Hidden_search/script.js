const btn = document.querySelector('.search__btn')
const input = document.querySelector('.search__input')

btn.addEventListener('click', () => {
    input.classList.toggle('active')
})
