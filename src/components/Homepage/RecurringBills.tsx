import { MdArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import useFinanceState from "../../FinanceState";

function RecurringBills() {
  const navigate = useNavigate();
  const financeData = useFinanceState((state) => state.data);

  let recurringBills = financeData.transactions.filter(transaction => transaction.recurring);

  

  return (
    <section className="rounded-xl px-5 py-6 md:px-8 md:py-8 flex flex-col gap-5 bg-white">
      <header className="flex items-center justify-between gap-3">
        <h3 className="text-preset2 font-bold text-grey900">Recurring Bills</h3>
        <button
          onClick={() => navigate("/bills")}
          className="flex items-center gap-3 text-preset4 text-grey500"
        >
          See Details <MdArrowRight className="w-5 h-5" />
        </button>
      </header>
    </section>
  );
}

export default RecurringBills;
