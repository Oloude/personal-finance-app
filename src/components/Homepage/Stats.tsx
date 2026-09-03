const stats = [
    {title : 'Current Balance', value: '$4,836.00'},
    {title : 'Income', value: '$3,814.25'},
    {title : 'Expenses', value: '$1,700.50'},
]

function Stats() {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
      {
        stats.map(stat => <Stat key={stat.title} {...stat}/>)
      }

    </div>;
}

export default Stats;

type StatProps = {
    title : string;
    value: string
}

function Stat({title, value} : StatProps){
    return(
<div className={`flex flex-col gap-3 rounded-xl p-5 ${title === 'Current Balance' ? 'bg-grey900 text-white' : 'bg-white text-grey900'}`}>
    <h2 className={`${title === 'Current Balance' ? 'text-white' : 'text-grey500'} text-preset4`}>{title}</h2>
    <p className="text-preset1 font-bold">{value}</p>
</div>
    )
}
