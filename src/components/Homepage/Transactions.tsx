import { useNavigate } from "react-router";
import useFinanceState from "../../FinanceState";
import { MdArrowRight } from "react-icons/md";
import formatDate from "../../utils/FormatDate";
import formatAmount from "../../utils/FormatTransactionAmount";

function Transactions() {
  const navigate = useNavigate();
  const financeData = useFinanceState((state) => state.data);

  let firstFiveTransactions = financeData.transactions.slice(0, 5);
  return (
    <section className="rounded-xl px-5 py-6 md:px-8 md:py-8 flex flex-col gap-5 bg-white">
      <header className="flex items-center justify-between gap-3">
        <h3 className="text-preset2 font-bold text-grey900">Transactions</h3>
        <button
          onClick={() => navigate("/transactions")}
          className="flex items-center gap-3 text-preset4 text-grey500"
        >
          View All <MdArrowRight className="w-5 h-5" />
        </button>
      </header>
      <div className="flex flex-col gap-5 divide-y divide-grey100">
        {firstFiveTransactions.map((transaction) => (
          <div
            key={transaction.name}
            className="flex items-center gap-3 justify-between pb-5"
          >
            <div className="flex items-center gap-4">
              <img
                src={transaction.avatar}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <h4 className="text-preset4 font-bold text-grey900">
                {transaction.name}
              </h4>
            </div>
            <div className="flex flex-col items-end gap-2">
              {formatAmount(transaction.amount)}
              <p className="text-preset5 text-grey500">
                {formatDate(transaction.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Transactions;
