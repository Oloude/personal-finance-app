

function Summary() {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-xl bg-white">
        <h3 className="text-preset3 text-grey900 font-bold">Summary</h3>
        <div className="flex flex-col gap-4 divide-y divide-grey500/15">
          <div className="flex items-center gap-2 justify-between pb-4">
            <h4 className="text-preset5 text-grey500">Paid Bills</h4>
            <span className="text-preset5 text-grey900 font-bold">2 ($320.00)</span>
          </div>
          <div className="flex items-center gap-2 justify-between pb-4">
            <h4 className="text-preset5 text-grey500">Total Upcoming</h4>
            <span className="text-preset5 text-grey900 font-bold">6 ($1,230.00)</span>
          </div>
          <div className="flex items-center gap-2 justify-between pb-4">
            <h4 className="text-preset5 text-red">Due Soon</h4>
            <span className="text-preset5 text-red font-bold">2 ($40.00)</span>
          </div>

        </div>
        
    </div>
  )
}

export default Summary