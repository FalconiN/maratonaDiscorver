const modal = document.querySelector('.modal-overlay')
const button = document.querySelector('.button')
const close = document.querySelector('.close')

button.addEventListener('click', () => {
    modal.classList.add('active')

})

close.addEventListener('click', () => {
    modal.classList.remove('active')

})


