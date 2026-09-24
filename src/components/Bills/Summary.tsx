import type { Transaction } from "../../FinanceState"

type SummaryProps ={
   dueSoon : Transaction[];
   paidBills : Transaction[];
   upcomingBills : Transaction[];
}

function Summary({dueSoon, paidBills, upcomingBills} : SummaryProps) {
  let dueSoonTotal = dueSoon.reduce((total, bill) => total + Math.abs(bill.amount), 0)
  let paidBillsTotal = paidBills.reduce((total, bill) => total + Math.abs(bill.amount), 0)
  let upcomingBillsTotal = upcomingBills.reduce((total, bill) => total + Math.abs(bill.amount), 0)

  return (
    <div className="flex flex-col gap-5 p-5 rounded-xl bg-white">
        <h3 className="text-preset3 text-grey900 font-bold">Summary</h3>
        <div className="flex flex-col gap-4 divide-y divide-grey500/15">
          <div className="flex items-center gap-2 justify-between pb-4">
            <h4 className="text-preset5 text-grey500">Paid Bills</h4>
            <span className="text-preset5 text-grey900 font-bold">{paidBills.length} (${paidBillsTotal.toFixed(2)})</span>
          </div>
          <div className="flex items-center gap-2 justify-between pb-4">
            <h4 className="text-preset5 text-grey500">Total Upcoming</h4>
            <span className="text-preset5 text-grey900 font-bold">{upcomingBills.length} (${upcomingBillsTotal.toFixed(2)})</span>
          </div>
          <div className="flex items-center gap-2 justify-between pb-4">
            <h4 className="text-preset5 text-red">Due Soon</h4>
            <span className="text-preset5 text-red font-bold">{dueSoon.length} (${dueSoonTotal.toFixed(2)})</span>
          </div>

        </div>
        
    </div>
  )
}

export default Summary