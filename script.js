const expenseAmount = document.querySelector('#expenses-amount')
const expenseProduct = document.querySelector('#produce-title')
const budgetAmount = document.querySelector('#budget-amount')
const budgetAmountBtn = document.querySelector('#budget-amount-btn')
const expensesAmountBtn = document.querySelector('#expenses-amount-btn')
const totalBudgetAmount = document.querySelector('#total-budget-amount')
const totalExpensesAmount = document.querySelector('#total-expenses-amount')
const totalBalanceAmount = document.querySelector('#total-balance-amount')
const listItem = document.querySelector('#list-item')


let budget = {
    budgetAmount: 0,
    expenseAmount: 0,
    currentExpense: 0,
    currentExpenseTitle: ''
}

let budgetArray = []


const addBudget = ()=>{
    const amount = parseInt(budgetAmount.value)
    if(amount> 0){
        budget.budgetAmount += amount
        totalBudgetAmount.textContent = budget.budgetAmount
        budgetAmount.value = ''
    }else{
        console.log('error')
    }
}

const addExpenses = () =>{
    const expenseAmountValue = parseInt(expenseAmount.value);
    if(expenseAmountValue>0){
        const expenseTitleValue = expenseProduct.value

        const newExpense = {
            budgetAmount: budget.budgetAmount,
            expenseAmount: budget.expenseAmount += expenseAmountValue,
            currentExpense: expenseAmountValue,
            currentExpenseTitle: expenseTitleValue
        }
    
        totalExpensesAmount.textContent = newExpense.expenseAmount
        totalBalanceAmount.textContent = budget.budgetAmount - newExpense.expenseAmount

        budgetArray.push(newExpense)
    
        // Clear input fields
        expenseProduct.value = '';
        expenseAmount.value = '';
    }else{
        console.log('error')
    }
}

budgetAmountBtn.addEventListener('click', addBudget)
expensesAmountBtn.addEventListener('click', addExpenses)


