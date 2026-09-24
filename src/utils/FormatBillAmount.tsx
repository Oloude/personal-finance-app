export default function FormatBillAmount(date: string, amount:string){
    let newDate = new Date(date)
    let isDueSoon = newDate.getMonth() === 6 && (newDate.getDate() > 19 && newDate.getDate() < 25)
return (
isDueSoon ? <p className="text-preset4 font-bold text-red">${amount}</p> : <p className="text-preset4 font-bold text-grey900">${amount}</p>
)
}