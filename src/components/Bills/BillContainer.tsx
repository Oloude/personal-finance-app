import { useState } from "react"
import BillTable from "./BillTable"
import Filter from "./Filter"


function BillContainer() {
    const [showDropdown, setShowDropdown] = useState(false)
    const [sortBy, setSortBy] = useState('Latest')
    const [searchQuery, setSearchQuery] = useState('')

    function handleToggleShowDropdown(){
        setShowDropdown(prev => !prev)
    }

    function handleSearchQueryChange(value : string){
        setSearchQuery(value)
    }


  return (
    <section className="flex flex-col gap-6 px-5 py-6 rounded-xl bg-white lg:col-span-2">
        <Filter showDropdown={showDropdown} handleToggleShowDropdown={handleToggleShowDropdown} sortBy={sortBy} setSortBy={setSortBy} searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange}/>
        <BillTable/>
    </section>
  )
}

export default BillContainer