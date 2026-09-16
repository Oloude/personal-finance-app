import { useState } from "react";
import { FaEllipsis } from "react-icons/fa6";
import PotDropdown from "./PotDropdown";



type Pot = {
  name: string;
  target: number;
  total: number;
  theme : string;
  
};

type PotProps ={
    pot : Pot;
    handleShowDropdown : ()=> void;
    showDropdown : null | string;
    id: number;
}


function Pot({pot, handleShowDropdown, showDropdown, id} : PotProps) {
   

    const savedPercent = (pot.total/pot.target) * 100
    
  return <div className="px-5 py-6 flex flex-col gap-8 bg-white rounded-xl relative">
    <header className="flex items-end justify-between">
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{backgroundColor : pot.theme}}></div>
            <h3 className="text-preset2 font-bold text-grey900">{pot.name}</h3>
        </div>
        <button onClick={handleShowDropdown} className="text-grey300"><FaEllipsis className="w-4 h-4" /></button>
        {showDropdown === `${pot.name}-${id}`  && <PotDropdown/>}
    </header>
    
    <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <h4 className="text-preset4 text-grey500">Total Saved</h4>
            <p className="text-preset1 font-bold text-grey900">${pot.total.toFixed(2)}</p>
        </div>
        <div className="flex flex-col gap-3">
            <div className="w-full h-2 rounded-full bg-beige100 flex">
                <span className="h-full rounded-full" style={{width : `${savedPercent}%`, backgroundColor: pot.theme}}></span>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-preset5 font-bold text-grey500">{savedPercent.toFixed(2)}%</p>
                <p className="text-preset5 text-grey500">Target of ${pot.target}</p>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-4">
        <button className="px-4 py-4 rounded-lg bg-beige100 text-preset4 font-bold text-grey900 flex-1">+ Add Money</button>
        <button className="px-4 py-4 rounded-lg bg-beige100 text-preset4 font-bold text-grey900 flex-1">Withdraw</button>
    </div>
  </div>;
}

export default Pot;
