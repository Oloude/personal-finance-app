import useFinanceState from "../../FinanceState";
import type  {Budget as BudgetType} from '../../FinanceState'

export default function SpendingSummary() {
    const budgets = useFinanceState(state => state.data).budgets
  return <section className="flex items-center flex-col gap-8 px-5 py-6 rounded-xl bg-white">
    <Summary budgets={budgets}/>
    
  </section>;
}

type SummaryProps = {
    budgets : BudgetType[]
}

function Summary({budgets} : SummaryProps){
    return(
        <div className="flex flex-col gap-6 w-full">
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
