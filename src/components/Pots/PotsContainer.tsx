import useFinanceState from "../../FinanceState"
import  Pot from "./Pot"


function PotsContainer() {
    const pots = useFinanceState(state => state.data).pots
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{
    pots.map(pot => <Pot key={pot.name} pot={pot}/>)
}
    </section>
  )
}

export default PotsContainer