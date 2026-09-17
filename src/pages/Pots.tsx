
import { useState } from "react";
import AddNewPotModal from "../components/Pots/AddNewPotModal";
import Header from "../components/Pots/Header";
import PotsContainer from "../components/Pots/PotsContainer";


//  Adding money to a pot should deduct the given amount from the current balance (seen on the Overview page).
//   - Withdrawing money from a pot should add that amount to the current balance.
//   - Deleting a pot should return all the money from the pot to the current balance.

function Pots() {
  const [showAddNewPotModal, setShowAddNewPotModal] = useState(false)

  function handleToggleAddNewPotModal(){
    setShowAddNewPotModal(prev => !prev)
  }


  return <div className="space-y-8">
    {showAddNewPotModal && <AddNewPotModal closeModal={handleToggleAddNewPotModal}/>}
    <Header openModal={handleToggleAddNewPotModal}/>
    <PotsContainer/>
  </div>;
}

export default Pots;
