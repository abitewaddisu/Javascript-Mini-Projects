showBtn = document.querySelector('.show-modal')
hideBtn = document.querySelector('.close-modal')
modal = document.querySelector('.modal')
overlay = document.querySelector('.overlay')

const showModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const hideModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

showBtn.addEventListener('click', showModal)
hideBtn.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideModal()
    }
})
