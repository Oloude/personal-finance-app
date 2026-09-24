import { useState } from "react"
import BillTable from "./BillTable"
import Filter from "./Filter"
import type { Transaction } from "../../FinanceState"
import SortBillData from "../../utils/SortBillData"

type BillsProps = {
    bills : Transaction[];
}

function BillContainer({bills} : BillsProps) {
    const [showDropdown, setShowDropdown] = useState(false)
    const [sortBy, setSortBy] = useState('Latest')
    const [searchQuery, setSearchQuery] = useState('')
    // const [uniqueBills, setUniqueBills] = useState(bills)

    let filteredData = SortBillData(bills.filter(bill => {
       if(searchQuery.trim() && !bill.name.toLowerCase().includes(searchQuery.toLowerCase().trim())){
        return false
       }
        return true
    }), sortBy)


    function handleToggleShowDropdown(){
        setShowDropdown(prev => !prev)
    }

    function handleSearchQueryChange(value : string){
        setSearchQuery(value)
    }


  return (
    <section className="flex flex-col gap-6 px-5 py-6 rounded-xl bg-white lg:col-span-2">
        <Filter showDropdown={showDropdown} handleToggleShowDropdown={handleToggleShowDropdown} sortBy={sortBy} setSortBy={setSortBy} searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange}/>
        <BillTable bills={filteredData}/>
    </section>
  )
}

export default BillContainer