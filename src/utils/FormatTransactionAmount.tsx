// export default function formatAmount(amount:number){
//     let stringAmount = amount.toString()
//     let formatedAmount
//     if(stringAmount.startsWith('-')){
//        formatedAmount = (<p classname='text-preset4 font-bold text-grey900'>-${stringAmount.slice(1)}<p>)
//     }else{
//         formatedAmount = (<p classname='text-preset4 font-bold text-grey900'>+${stringAmount}<p>)
//     }

//     return formatedAmount
// }

export default function FormatAmount(amount: number) {
  const isNegative = amount < 0;
  const formattedAmount = Math.abs(amount).toFixed(2);

  return (
    <p className={`text-preset4 font-bold  ${isNegative ? 'text-grey900' : 'text-green'}`}>
     {`${isNegative ? "-" : "+"}$${formattedAmount}`}
    </p>
  );
}