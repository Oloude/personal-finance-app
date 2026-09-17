import { IoCloseCircleOutline } from "react-icons/io5";
import useFinanceState from "../../FinanceState";

type DeleteModalProps = {
  closeModal : ()=> void;
  pot : {
  name: string;
  target: number;
  total: number;
  theme: string;
};
}

function DeletePotModal({closeModal, pot} : DeleteModalProps) {
  const handleDeletePot = useFinanceState(state => state.handleDeletePot)

  function handleClickDelete(){
    handleDeletePot(pot)
    closeModal()
  }
  return (
   <div className="fixed inset-0 bg-black/10 z-30 backdrop-blur-xs h-screen flex items-center justify-center">
             <div className="max-w-140 rounded-xl p-8 flex flex-col gap-5 bg-white w-full">
                 <header className="flex items-center justify-between">
                     <h1 className="text-preset1 text-grey900 font-bold">Delete ‘{pot.name}’?</h1>
                     <button onClick={closeModal} className="text-grey500"><IoCloseCircleOutline className="w-8 h-8" /></button>
                 </header>
                 <p className="text-preset4 text-grey500">Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever.</p>
               
                 <button onClick={handleClickDelete} className="rounded-lg bg-red text-white font-bold text-preset4 h-13 w-full">Yes, Confirm Deletion</button>
                 <button onClick={closeModal} className="text-preset4 text-grey500">No, Go Back</button>
             </div>
</div>
  )
}

export default DeletePotModal