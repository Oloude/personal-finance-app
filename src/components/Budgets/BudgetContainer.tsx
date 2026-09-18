import useFinanceState from "../../FinanceState";
import Budget from './Budget'

function BudgetContainer() {
    const budgets = useFinanceState(state => state.data).budgets
  return <section className="flex flex-col gap-6 lg:col-span-3">
{
    budgets.map(budget => <Budget key={budget.category} budget={budget}/>)
}

  </section>;
}

export default BudgetContainer;
