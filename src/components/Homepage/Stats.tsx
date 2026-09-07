import useFinanceState from "../../FinanceState";

function Stats() {
    const financeData = useFinanceState(state => state.data)

    const balance = Object.entries(financeData.balance)
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
      {
        balance.map((stat) => <Stat key={stat[0]} title={stat[0]} value={stat[1]} />)
      }

    </div>;
}

export default Stats;

type StatProps = {
    title : string;
    value:number
}

function Stat({title, value} : StatProps){
    return(
<div className={`flex flex-col gap-3 rounded-xl p-5 ${title === 'current' ? 'bg-grey900 text-white' : 'bg-white text-grey900'}`}>
    <h2 className={`${title === 'current' ? 'text-white' : 'text-grey500'} text-preset4 capitalize` } >{title === 'current' ?'Current Balance' : title}</h2>
    <p className="text-preset1 font-bold">${value}</p>
</div>
    )
}
