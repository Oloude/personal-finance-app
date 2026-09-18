import { useState } from "react";
import useFinanceState from "../../FinanceState";
import Budget from './Budget'

function BudgetContainer() {
    const budgets = useFinanceState(state => state.data).budgets
    const [showBudgetDropdown, setShowBudgetDropdown] = useState<null | string>(null)

    function handleToggleShowBudgetDropdown(value: string){
      setShowBudgetDropdown(prev => prev === value ? null : value)
    }
  return <section className="flex flex-col gap-6 lg:col-span-3">
{
    budgets.map(budget => <Budget key={budget.category} budget={budget} showBudgetDropdown={showBudgetDropdown} handleToggleShowBudgetDropdown={handleToggleShowBudgetDropdown}/>)
}

  </section>;
}

export default BudgetContainer;
