import { useNavigate } from "react-router";
import useFinanceState from "../../FinanceState";
import { MdArrowRight } from "react-icons/md";


function Budgets() {
 const navigate = useNavigate();
  const financeData = useFinanceState((state) => state.data);

  const budgets = financeData.budgets;

  let firstFourBudgets = budgets.slice(0, 4);

  return (
    <section className="rounded-xl px-5 py-6 md:px-8 md:py-8 flex flex-col gap-5 bg-white">
      <header className="flex items-center justify-between gap-3">
        <h3 className="text-preset2 font-bold text-grey900">Budgets</h3>
        <button
          onClick={() => navigate("/pots")}
          className="flex items-center gap-3 text-preset4 text-grey500"
        >
          See Details <MdArrowRight className="w-5 h-5" />
        </button>
      </header>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-1 p-4 flex items-center gap-4 bg-beige100 rounded-xl">
         
        </div>

        <div className="grid grid-cols-2 gap-4 md:w-25 md:grid-cols-1">
          {firstFourBudgets.map((budget) => (
            <div key={budget.category} className={`flex items-center gap-4 `}>
              <div
                className="h-full rounded-full w-1"
                style={{ backgroundColor: budget.theme }}
              ></div>
              <div className="flex flex-col gap-1">
                <h4 className="text-preset5 text-grey500">{budget.category}</h4>
                <p className="text-preset4 font-bold text-grey900">
                  ${budget.maximum}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Budgets