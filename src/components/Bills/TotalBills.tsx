import { PiReceiptFill } from "react-icons/pi";

type TotalBillsProps ={
  totalBill : number;
 
}
function TotalBills({totalBill} : TotalBillsProps) {
  return (
    <div className="flex gap-5 px-5 py-6 rounded-xl bg-grey900 items-center md:flex-col md:justify-between md:items-start md:px-6 md:gap-8">
      <PiReceiptFill className="w-10 h-10 text-white" />
      <div className="flex flex-col gap-2.75">
        <h2 className="text-preset4 text-white">Total bills</h2>
        <p className="text-preset1 font-bold text-white">${totalBill}</p>
      </div>
    </div>
  );
}

export default TotalBills;
