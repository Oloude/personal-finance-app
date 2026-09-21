import type { Transaction } from "../FinanceState";

export default function lastestSpendingByCategory(transactions : Transaction[], budgetCategories : string[]){
let sortedTransaction = transactions.toSorted((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
let sortedIncludedTransactionCategory = sortedTransaction.filter(transaction => budgetCategories.includes(transaction.category)).reduce((category, transaction) => {
    if(!category[transaction.category]){
        category[transaction.category] = []
    }
    category[transaction.category].push(transaction)
    return category
}, {} as Record<string, Transaction[]>)

return sortedIncludedTransactionCategory
}