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
    // open(){
    //     modal.classList.add('active')
    // },
    // close(){
    //         modal.classList.remove('active')
    //     }
        toggle(){
            modal.classList.toggle('active')
        }
}



const transactions = [
    {
        id: 1, 
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2, 
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3, 
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    }
]


const Transaction = {
    incomes () {
        // somar as entradas 
    }, 
    expenses () {
        // somar as saidas
    },
    total () {
        // entradas - saídas
    }
}

const DOM = {
    transactionContainer: document.querySelector('#data-table tbody'),

    addTransaction (transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        // console.log(tr.innerHTML)

        DOM.transactionContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction) {

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="assets/minus.svg" alt="remover transação">
            </td>
        `
        return html
    }
}

// DOM.addTransaction(transactions[0])


transactions.forEach((transaction) => {
    // console.log(transaction)
    DOM.addTransaction(transaction)
})