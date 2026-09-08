import useFinanceState from "../../FinanceState";
import  type { Transaction } from "../../FinanceState";
import formatDate from "../../utils/FormatDate";
import FormatAmount from "../../utils/FormatTransactionAmount";

function TransactionTable() {
    const transactions = useFinanceState(state => state.data).transactions
    
  return <>
  <MobileTable transactions={transactions}/>
  <DesktopTable transactions={transactions}/>
  </>;
}

export default TransactionTable;

function MobileTable({transactions} :{transactions :Transaction[]}){
    
    return (
        <section className="flex flex-col gap-4 divide-y divide-grey100 md:hidden">
            {
              transactions.map(transaction => <div key={transaction.name} className="flex items-center gap-3 justify-between pb-4">
               <div className="flex items-center gap-3">
                <img src={transaction.avatar} alt="" className="w-8 h-8 rounded-full"/>
                <div className="space-y-1">
                    <h3 className="text-preset4 text-grey900 font-bold">{transaction.name}</h3>
                    <span className="text-preset5 text-grey500">{transaction.category}</span>

                </div>
               </div>
               <div className="flex flex-col items-end gap-2">
                             {FormatAmount(transaction.amount)}
                             <p className="text-preset5 text-grey500">
                               {formatDate(transaction.date)}
                             </p>
                           </div>
              </div>)
            }

        </section>
    )
}

function DesktopTable({transactions} :{transactions :Transaction[]}){
return(
    <section className="md:flex flex-col gap-6 hidden">
        <div className="grid grid-cols-10 lg:grid-cols-12 gap-8 py-3">
           <h4 className="text-preset5 text-grey500 col-span-4 lg:col-span-5">Recipient / Sender</h4>
           <h4 className="text-preset5 text-grey500 col-span-2">Category</h4>
           <h4 className="text-preset5 text-grey500 col-span-2">Transaction Date</h4>
           <h4 className="text-preset5 text-grey500 col-span-2 lg:col-span-3 text-right">Amount</h4>
        </div>
        <div className="flex flex-col gap-4 divide-y divide-grey100">
            {
                transactions.map(transaction => <div key={transaction.name} className="grid grid-cols-10 lg:grid-cols-12 gap-8 py-3 pb-4">
                    <div className="flex items-center gap-3 col-span-4 lg:col-span-5">
                       <img src={transaction.avatar} alt="" className="w-10 h-10 rounded-full"/> 
                       <h4 className="text-preset4 text-grey900 font-bold">{transaction.name}</h4>
                    </div>
                    <p className="text-preset5 text-grey500 col-span-2">{transaction.category}</p>
                    <p className="text-preset5 text-grey500 col-span-2">{formatDate(transaction.date)}</p>
                    <p className="text-preset5 text-grey500 col-span-2 lg:col-span-3 text-right">{FormatAmount(transaction.amount)}</p>
                </div>)
            }
        </div>

    </section>
)
}
