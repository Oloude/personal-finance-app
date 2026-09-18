import { FaEllipsis } from "react-icons/fa6"
import type { Budget as BudgetType } from "../../FinanceState"
import { MdArrowRight } from "react-icons/md"
import BudgetDropdown from "./BudgetDropdown";
import DeleteBudgetModal from "./DeleteBudgetModal";
import { useState } from "react";
import EditBudgetModal from "./EditBudgetModal";

type BudgetProps = {
    budget : BudgetType;
    handleToggleShowBudgetDropdown : (value: string) => void;
    showBudgetDropdown : string | null;
}

export default function Budget({budget, handleToggleShowBudgetDropdown, showBudgetDropdown} : BudgetProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditBudgetModal, setShowEditBudgetModal] = useState(false)

    function handleToggleShowDeleteModal(){
        setShowDeleteModal(prev => !prev)
    }

    function handleToggleShowEditBudgetModal(){
        setShowEditBudgetModal(prev => !prev)
    }


  return (
    <div className="rounded-xl bg-white px-5 py-6 flex flex-col gap-5">
        {showDeleteModal && <DeleteBudgetModal closeModal={handleToggleShowDeleteModal}/>}
        {showEditBudgetModal && <EditBudgetModal closeModal={handleToggleShowEditBudgetModal}/>}
        <header className="flex items-center justify-between gap-3 relative">
            <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{backgroundColor : budget.theme}}></div>
                <h3 className="text-preset2 text-grey900 font-bold">{budget.category}</h3>
            </div>
            <button onClick={() => handleToggleShowBudgetDropdown(budget.category)}><FaEllipsis className="w-4 h-4 text-grey300" /></button>
            {showBudgetDropdown === budget.category && <BudgetDropdown openDeleteModal={handleToggleShowDeleteModal} openEditBudgetModal={handleToggleShowEditBudgetModal}/>}
        </header>
        <div className="flex flex-col gap-4">
            <h4 className="text-preset4 text-grey500">Maximum of ${budget.maximum.toFixed(2)}</h4>
            <div className="bg-beige100 rounded p-1 h-8 flex">

            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                    <div className="h-10.75 w-1 rounded-full " style={{backgroundColor: budget.theme}}></div>
                    <div className="flex flex-col gap-1">
                        <h5 className="text-preset5 text-grey500">Spent</h5>
                        <span className="text-preset4 font-bold text-grey900">$25.00</span>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="h-10.75 w-1 rounded-full bg-beige100" ></div>
                    <div className="flex flex-col gap-1">
                        <h5 className="text-preset5 text-grey500">Free</h5>
                        <span className="text-preset4 font-bold text-grey900">$25.00</span>
                    </div>
                </div>
            </div>

        </div>

        {/* lastest spending */}
        <div className="rounded-xl bg-beige100 p-4 flex flex-col gap-5">
            <header className="flex items-center gap-3 justify-between">
                <h3 className="text-preset3 text-grey900 font-bold">Latest Spending</h3>
                <button className="flex items-center gap-3 text-preset4 text-grey500">
                    See All
                    <MdArrowRight className="w-5 h-5" />
                </button>
            </header>
            <div className="flex flex-col gap-3 divide-y divide-grey500/20">
                {
                    [1,2,3,].map(i => <BudgetDetails key={i}/>)
                }
            </div>

        </div>
    </div>
  )
}


function BudgetDetails(){
    return (
        <div className="flex items-center justify-between gap-4 pb-3">
            <div className="flex items-center gap-3">
                <img src="" alt="" className="hidden w-10 h-10 rounded-full" />
                <h4 className="text-preset5 font-bold text-grey900">Charlie Electric Company</h4>
            </div>
            <div className="flex flex-col items-end gap-1">
                <span className="text-preset5 font-bold text-grey900">-$100.00</span>
                <span className="text-preset5 text-grey500">1 Aug 2024</span>
            </div>
        </div>
    )
}
