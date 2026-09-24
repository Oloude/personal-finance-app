import Summary from "./Summary"
import TotalBills from "./TotalBills"
import type { Transaction } from "../../FinanceState"

type SummaryContainerProps = {
  totalBill : number;
  dueSoon : Transaction[];
  paidBills : Transaction[];
  upcomingBills : Transaction[];
}

function SummaryContainer({totalBill, dueSoon, paidBills, upcomingBills} : SummaryContainerProps) {
  return (
   <section className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:col-span-1">
    <TotalBills totalBill={totalBill} />
    <Summary dueSoon={dueSoon} paidBills={paidBills} upcomingBills={upcomingBills}/>
   </section>
  )
}

export default SummaryContainer