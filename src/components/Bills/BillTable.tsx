import type { Transaction } from "../../FinanceState";
import FormatBillAmount from "../../utils/FormatBillAmount";
import FormateDueDate from "../../utils/FormateDueDate";

type BillTableProps ={
    bills : Transaction[] | []
}

function BillTable({bills}: BillTableProps) {
  return <section className="flex flex-col gap-6">
    <div className="md:grid grid-cols-5 gap-8 hidden border-b border-grey100 pb-4">
        <h4 className="text-preset5 text-grey500 col-span-3">Bill Title</h4>
        <div className="flex items-center justify-between col-span-2">
            <h4 className="text-preset5 text-grey500">Due Date</h4>
        <h4 className="text-preset5 text-grey500">Amount</h4>
        </div>
        
    </div>

    <div className="flex flex-col gap-5">
        {
            bills.map(bill => <div key={bill.name} className="grid grid-cols-1 gap-2 pb-5 md:grid-cols-5 md:gap-8">
            <div className="flex items-center gap-4 md:col-span-3">
                <img src={bill.avatar} alt="" className="w-8 h-8 rounded-full"/>
                <h5 className="text-preset4 font-bold text-grey900">{bill.name}</h5>
            </div>
            <div className="flex items-center justify-between md:col-span-2">
                <div className="flex items-center gap-2">
                    {FormateDueDate(bill.date)}
                </div>
                {FormatBillAmount(bill.date, Number(Math.abs(bill.amount)).toFixed(2))}
            </div>
        </div>)
        }
        
    </div>

  </section>;
}

export default BillTable;
