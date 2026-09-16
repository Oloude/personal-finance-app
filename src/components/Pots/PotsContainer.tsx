import { useState } from "react"
import useFinanceState from "../../FinanceState"
import  Pot from "./Pot"


function PotsContainer() {
    const pots = useFinanceState(state => state.data).pots
     const [showDropdown, setShowDropdown] = useState<null | string>(null)


  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{
    pots.map((pot, i) => <Pot key={pot.name} pot={pot} id={i+1}  handleShowDropdown={()=> setShowDropdown(prev => prev === `${pot.name}-${i+1}` ? null : `${pot.name}-${i+1}`)} showDropdown={showDropdown} />)
}
    </section>
  )
}

export default PotsContainer