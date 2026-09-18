import useFinanceState from "../../FinanceState";
import type  {Budget as BudgetType} from '../../FinanceState'
import SpendingChart from "./SpendingChart";

export default function SpendingSummary() {
    const budgets = useFinanceState(state => state.data).budgets
    let totalBudget = budgets.reduce((total, budget)=> total + budget.maximum,0)
   let currentDegree = 0

const gradientArr = budgets.map((budget) => {
  const deg = Math.round((budget.maximum / totalBudget) * 360)

  const start = currentDegree
  const end = currentDegree + deg

  currentDegree = end

  return {
    color: budget.theme,
    start,
    end,
  }
})
  return <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 px-5 py-6 rounded-xl bg-white lg:col-span-2 ">
    <SpendingChart amount={407} limit={totalBudget} gradients={gradientArr}/>
    <Summary budgets={budgets}/>
    
  </section>;
}

type SummaryProps = {
    budgets : BudgetType[]
}

function Summary({budgets} : SummaryProps){
    return(
        <div className="flex flex-col gap-6 ">
            <h2 className="text-preset2 font-bold text-grey900">Spending Summary</h2>
            <div className="flex flex-col gap-4 divide-y divide-grey100">
{
    budgets.map(budget => <div key={budget.category} className="flex items-center gap-2 justify-between pb-2">
        <div className="flex items-center gap-4">
            <div className="h-5.25 w-1 rounded-full " style={{backgroundColor: budget.theme}}></div>
            <h3 className="text-preset4 text-grey500">{budget.category}</h3>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-preset3 font-bold text-grey900">$250.00</span>
            <span className="text-preset5 text-grey500">of ${budget.maximum.toFixed(2)}</span>
        </div>
    </div>)
}

            </div>
        </div>
    )
}
