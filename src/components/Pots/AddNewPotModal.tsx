import { FaDollarSign } from "react-icons/fa6"
import { IoCloseCircleOutline } from "react-icons/io5"


function AddNewPotModal() {
  return (
    <div className="fixed inset-0 bg-black/10 z-30 backdrop-blur-xs h-screen flex items-center justify-center">
        <div className="max-w-140 rounded-xl p-8 flex flex-col gap-5 bg-white w-full">
            <header className="flex items-center justify-between">
                <h1 className="text-preset1 text-grey900 font-bold">Add New Pot</h1>
                <button className="text-grey500"><IoCloseCircleOutline className="w-8 h-8" /></button>
            </header>
            <p className="text-preset4 text-grey500">Create a pot to set savings targets. These can help keep you on track as you save for special purchases.</p>
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-preset5 font-bold text-grey500">Pot Name</label>
                    <input type="text" name="" id="" placeholder="e.g. Rainy Days" className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500" />
                    <span className="text-preset5 text-grey500 self-end">30 characters left</span>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-preset5 font-bold text-grey500">Target</label>
                    <div className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 flex items-center gap-4">
                        <FaDollarSign className="w-4 h-4" />
                        <input type="text" name="" id="" placeholder="e.g. 2000" className="outline-none" />
                    </div>
                    
                    
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-preset5 font-bold text-grey500">Theme</label>
                    <input type="text" name="" id="" placeholder="e.g. Rainy Days" className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500" />
               
                </div>
            </form>
            <button className="rounded-lg bg-grey900 text-white font-bold text-preset4 h-13 w-full">Add Pot</button>
        </div>
    </div>
  )
}

export default AddNewPotModal