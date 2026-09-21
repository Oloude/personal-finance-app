import type { Transaction } from "../FinanceState";

export default function getSpentPerCategory(transactions : Transaction[], budgetCategories: string[]){
 let augTransaction = transactions.filter(transaction => {
    let date = new Date(transaction.date)
    return date.getUTCFullYear() === 2024 &&
         date.getUTCMonth() === 7;
 })

 let augTransactionCatgory = augTransaction.filter(transaction => budgetCategories.includes(transaction.category) ).reduce((category, transaction) =>{
    category[transaction.category] = (category[transaction.category] || 0) + Math.abs(transaction.amount)
    return category
 } ,{}as Record<string, number>)

 return augTransactionCatgory
}