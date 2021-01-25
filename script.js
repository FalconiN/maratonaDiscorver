const modal = document.querySelector('.modal-overlay')

// const button = document.querySelector('.button')
// const close = document.querySelector('.cancel')

// button.addEventListener('click', () => {
//     modal.classList.add('active')

// })

// close.addEventListener('click', () => {
//     modal.classList.remove('active')

// })

let Modal = {
    open(){
        modal.classList.add('active')
    },
    close(){
        modal.classList.remove('active')
    }
}