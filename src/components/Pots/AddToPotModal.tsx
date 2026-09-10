import { FaDollarSign } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

function AddToPotModal() {
  return <div className="fixed inset-0 bg-black/10 z-30 backdrop-blur-xs h-screen flex items-center justify-center">
            <div className="max-w-140 rounded-xl p-8 flex flex-col gap-5 bg-white w-full">
                <header className="flex items-center justify-between">
                    <h1 className="text-preset1 text-grey900 font-bold">Add to ‘Savings’</h1>
                    <button className="text-grey500"><IoCloseCircleOutline className="w-8 h-8" /></button>
                </header>
                <p className="text-preset4 text-grey500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.</p>
                <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
              <h4 className="text-preset4 text-grey500">New Amount</h4>
              <p className="text-preset1 font-bold text-grey900">$139.00</p>
          </div>
          <div className="flex flex-col gap-3">
              <div className="w-full h-2 rounded-full bg-beige100 flex">
                  {/* <span className="h-full rounded-full" style={{width : `${savedPercent}%`, backgroundColor: pot.theme}}></span> */}
              </div>
              <div className="flex items-center justify-between">
                  <p className="text-preset5 font-bold text-grey500">5.95%</p>
                  <p className="text-preset5 text-grey500">Target of $2,000</p>
              </div>
          </div>
      </div>
                 <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-preset5 font-bold text-grey500">Amount to Add</label>
                        <div className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 flex items-center gap-4">
                            <FaDollarSign className="w-4 h-4" />
                            <input type="text" name="" id="" placeholder="e.g. 2000" className="outline-none" />
                        </div>
                        
                        
                    </div>
                <button className="rounded-lg bg-grey900 text-white font-bold text-preset4 h-13 w-full">Confirm Addition</button>
            </div>
        </div>;
}

export default AddToPotModal;
