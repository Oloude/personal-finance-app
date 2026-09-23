import Summary from "./Summary"
import TotalBills from "./TotalBills"


function SummaryContainer() {
  return (
   <section className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:col-span-1">
    <TotalBills/>
    <Summary/>
   </section>
  )
}

export default SummaryContainer