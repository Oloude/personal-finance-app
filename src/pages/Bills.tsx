//  - List out all the recurring transactions and ensure only one item is shown per vendor.
//   - Show the recurring transactions that have already been paid for August 2024.
//   - Show the payments due to be paid soon based on their monthly payment date. Calculate this from recurring transactions yet to be paid for August 2024, but due within five days of the latest overall transaction in the app (Emma Richardson - 19 August 2024).
//   - The search should search based on name.
//   - The sorting options include: Latest (earliest in the month), Oldest, A to Z, Z to A, Highest (transaction amount), Lowest.

import BillContainer from "../components/Bills/BillContainer";
import SummaryContainer from "../components/Bills/SummaryContainer";

function Bills() {
  return <div className="flex flex-col gap-8">
    <h1 className="text-preset1 text-grey900 font-bold">Recurring Bills</h1>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
      <SummaryContainer/>
      <BillContainer/>
    </div>
  </div>;
}

export default Bills;
