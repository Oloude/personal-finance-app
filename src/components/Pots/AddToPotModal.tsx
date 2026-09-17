import { useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import useFinanceState from "../../FinanceState";

type AddToPotProps = {
  closeModal: () => void;
  pot: {
    name: string;
    target: number;
    total: number;
    theme: string;
  };
};

function AddToPotModal({ closeModal, pot }: AddToPotProps) {
  const currentBalance = useFinanceState((state) => state.data.balance.current);
  const handleAddToPot = useFinanceState((state) => state.handleAddToPot);
  const [newAmount, setNewAmount] = useState(0);
  const [error, setError] = useState("");

  let newTotal = pot.total + Number(newAmount);
  let oldPercent = (pot.total / pot.target) * 100;
  let newPercent = (Number(newAmount) / pot.target) * 100;

  function handleConfirmAddition() {
    let errorMessage = "";
    if (currentBalance < Number(newAmount)) {
      errorMessage = "Current balance is not up to amount";
    }
    if (newAmount <= 0) {
      errorMessage = "Enter a valid amount";
    }
    if (newTotal > pot.target) {
      errorMessage = "The amount is too large";
    }
    setError(errorMessage);
    if (errorMessage.trim()) {
      return;
    }
    handleAddToPot(pot, newAmount);
    closeModal();
  }

  return (
    <div className="fixed inset-0 bg-black/10 z-30 backdrop-blur-xs h-screen flex items-center justify-center">
      <div className="max-w-140 rounded-xl p-8 flex flex-col gap-5 bg-white w-full">
        <header className="flex items-center justify-between">
          <h1 className="text-preset1 text-grey900 font-bold">
            Add to ‘{pot.name}’
          </h1>
          <button onClick={closeModal} className="text-grey500">
            <IoCloseCircleOutline className="w-8 h-8" />
          </button>
        </header>
        <p className="text-preset4 text-grey500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h4 className="text-preset4 text-grey500">New Amount</h4>
            <p className="text-preset1 font-bold text-grey900">
              ${(Number(newAmount) + pot.total).toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full h-2 rounded-full bg-beige100 flex gap-0.5">
              <span
                className="h-full rounded-l-full bg-grey900"
                style={{ width: `${oldPercent}%` }}
              ></span>
              <span
                className="h-full rounded-r-full bg-grey900"
                style={{ width: `${newPercent}%`, backgroundColor: pot.theme }}
              ></span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-preset5 font-bold text-grey500">
                {((newTotal / pot.target) * 100).toFixed(2)}%
              </p>
              <p className="text-preset5 text-grey500">
                Target of ${pot.target}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-preset5 font-bold text-grey500">
            Amount to Add
          </label>
          <div className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 flex items-center gap-4">
            <FaDollarSign className="w-4 h-4" />
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => setNewAmount(Number(e.target.value.trim()))}
              placeholder="e.g. 2000"
              className="outline-none flex-1"
            />
          </div>
          {error && <span className="text-xs text-red">{error}</span>}
        </div>
        <button
          onClick={handleConfirmAddition}
          className="rounded-lg bg-grey900 text-white font-bold text-preset4 h-13 w-full"
        >
          Confirm Addition
        </button>
      </div>
    </div>
  );
}

export default AddToPotModal;
