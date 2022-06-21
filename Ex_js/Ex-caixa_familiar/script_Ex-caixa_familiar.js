/* Criar objeto com 2 propriedades, ambas do tipo array
    receitas: []
    despesas: []

criar função quer irá calcular o total de receitas e despesas, mostrar mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let ledger1 = {
    income: [10.399 , 3 , 19 , 2],
    expense: [1 , 3 , 2 , 5]
}
let ledger2 = {
    income: [1 , 2 , 1 , 2],
    expense: [1 , 3 , 2 , 5]
}
let ledger3 = {
    income: [1 , 'creuza' , 2 , 5],
    expense: [1 , 3 , 2 , 5]
}

function ledgerBalance(ledger) {
    let incomeSum = 0 
    let expenseSum = 0
    let balance = 0

    //poderia usar for of e pegar valor direto
    for (const i in ledger.income) { 
        
          incomeSum += ledger.income[i] 
           // console.log(incomeSum)
        
    }
    
    for (const i in ledger.expense) {
       
        expenseSum += ledger.expense[i] 
          //  console.log(expenseSum)
    }
    balance = incomeSum - expenseSum
    if (isNaN(balance)){
        console.error("dados incompatíveis com a verdade")
        return
    }
        if (balance >= 0) {
            console.log(`Saldo positivo de ${balance.toFixed(2)}`)
        } else{ 
            console.log(`Saldo negativo de ${balance.toFixed(2)}`)
        }
}

const inputs = [ledger1 , ledger2 , ledger3]
for (const ledger of inputs) {
    ledgerBalance(ledger)
}


