const cards = document.getElementsByClassName('card');

for (let card of cards) {
    card.addEventListener('click', () => {
        for (let card of cards) {
            card.classList.remove('active')
        }
        card.classList.add('active');
    })
}
