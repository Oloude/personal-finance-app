import { MdArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import useFinanceState from "../../FinanceState";

function RecurringBills() {
  const navigate = useNavigate();
  const financeData = useFinanceState((state) => state.data);

  let bills = financeData.transactions.filter(transaction => transaction.recurring);
   let uniqueBills = [...new Map(bills.map(bill => [bill.name, bill])).values()]

  const billsPaidTotal = uniqueBills.filter(bill => {
   let newDate = new Date(bill.date) 

   return newDate.getMonth() > 6 || (newDate.getMonth() === 6 && newDate.getDate() < 19 )
  }).reduce((total, bill) => total + bill.amount ,0)

  const upcomingBillsTotal = uniqueBills.filter(bill => {
       let newDate = new Date(bill.date) 

   return !(newDate.getMonth() > 6 || (newDate.getMonth() === 6 && newDate.getDate() < 19 ))
  }).reduce((total, bill) => total + bill.amount ,0)


  const dueSoonTotal = uniqueBills.filter(bill => {
    let newDate = new Date(bill.date) 
    return newDate.getMonth() < 7 && (newDate.getDate() > 19 && newDate.getDate() < 24)
  }).reduce((total, bill) => total + bill.amount ,0)

  

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
      <div className="flex flex-col gap-3">
        <div className="px-4 py-5 flex items-center justify-between gap-2 border-l-4 border-l-green rounded-lg bg-beige100">
          <h4 className="text-preset4 text-grey500">Paid Bills</h4>
          <p className="text-preset4 text-grey900 font-bold">${Math.abs(billsPaidTotal).toFixed(2)}</p>
        </div>
        <div className="px-4 py-5 flex items-center justify-between gap-2 border-l-4 border-l-yellow rounded-lg bg-beige100">
          <h4 className="text-preset4 text-grey500">Total Upcoming</h4>
          <p className="text-preset4 text-grey900 font-bold">${Math.abs(upcomingBillsTotal).toFixed(2)}</p>
        </div>
        <div className="px-4 py-5 flex items-center justify-between gap-2 border-l-4 border-l-cyan rounded-lg bg-beige100">
          <h4 className="text-preset4 text-grey500">Due Soon</h4>
          <p className="text-preset4 text-grey900 font-bold">${Math.abs(dueSoonTotal).toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}

export default RecurringBills;
