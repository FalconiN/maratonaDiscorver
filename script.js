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

const Transaction = {

    all: [
        {
            description: 'Luz',
            amount: -50000,
            date: '23/01/2021',
        },
        {
            description: 'Website',
            amount: 500000,
            date: '23/01/2021',
        },
        {
            description: 'Internet',
            amount: -20000,
            date: '23/01/2021',
        },
        {
            description: 'App',
            amount: 200000,
            date: '23/01/2021',
        },
    ], 

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index){
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes () {
        // somar as entradas 
        let income = 0
        //pegar todas as transações
        //para cada transação
        Transaction.all.forEach((transaction) => {
            //se for maior que 0
            if (transaction.amount > 0){
                //somar e retornar a variavel
                income += transaction.amount
            }
        })

        return income
    }, 
    expenses () {
        let expense = 0
        //pegar todas as transações
        //para cada transação
        Transaction.all.forEach((transaction) => {
            //se for menor que 0
            if (transaction.amount < 0){
                //somar e retornar a variavel
                expense += transaction.amount
            }
        })
        
        return expense
    },
    total () {
        // entradas - saídas
        return Transaction.incomes() + Transaction.expenses()
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

        // if else ternário
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="assets/minus.svg" alt="remover transação">
            </td>
        `
        return html
    },

    updateBalance(){
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes())
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses())
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions(){
        DOM.transactionContainer.innerHTML = ""
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
        //pegando caracteres especias
        value = String(value).replace(/\D/g, "")
        //dividir o valor por 100, pois possuí 2 zeros a mais
        value = Number(value) / 100
        //como quer que faça a formatação - local e moeda brasileira
        value = value.toLocaleString('pt-br', {
            style: "currency",
            currency: "BRL"
        })
        //retorna o sinal (numero) + o valor (string)
        return signal + value
    }
}

const Form = {

}

const App = {
    init (){
        Transaction.all.forEach((transaction) => {
            // console.log(transaction)
            DOM.addTransaction(transaction)
        })
        //chamando a funionalidade update
        DOM.updateBalance()
        
    },
    reload (){
        //limpando e inicianto no reload a aplicação
        DOM.clearTransactions()
        App.init()
    }
}

App.init()

Transaction.remove(0)

 
