import { useState } from "react";
import { FaDollarSign } from "react-icons/fa6"
import { IoCloseCircleOutline } from "react-icons/io5"
import useFinanceState from "../../FinanceState";
import { IoMdArrowDropdown } from "react-icons/io";

type AddNewPotProps ={
    closeModal : ()=> void;
}
 
function AddNewPotModal({closeModal} : AddNewPotProps) {
    const pots = useFinanceState(state => state.data).pots
    const handleAddNewPot = useFinanceState(state => state.handleAddNewPot)
    const potThemes = pots.map(pot => pot.theme)

    const [formData, setFormData] = useState({
        name : '',
        target : '',
        theme : '',
    })
    const [formError, setFormError] = useState({
        name : '',
        target : '',
        theme : '',
    })
    const [showThemeDropdown, setShowThemeDropdown] = useState(false)
    const [selectedTheme, setSelectedTheme] = useState({title : 'Green', color: '#277c78'},)

    function handleSelectedThemeChange(title : string, color : string){
        setSelectedTheme({title, color})
        setFormData(prev =>( {...prev, theme: color}))
    }

    function handleFormDataChange(propTitle :string, value : string){
      setFormData(prev => ({
        ...prev, [propTitle] : value
      }))
    }


    function handleFormSubmit(e :  React.FormEvent<HTMLFormElement>){
      e.preventDefault()

      const error = {name : '',
        target : '',
        theme : '',}

      if(!formData.name.trim() || formData.name.trim().length < 3)  {
        error.name = 'Enter Pot Name'
      }

      if(!formData.target.trim() || Number(formData.target) < 1){
        error.target = 'Enter a valid target'
      }

      if(potThemes.includes(formData.theme)){
        error.theme = 'Select another theme color'
      }

      
      setFormError(error)
      if(error.name || error.target || error.theme){
        return
      }
      let pot = {
        name : formData.name.trim(),
        target : Number(formData.target.trim()),
        theme : formData.theme,
        total : 0
      }
      handleAddNewPot(pot)
      closeModal()


    }


  return (
    <div className="fixed inset-0 bg-black/10 z-30 backdrop-blur-xs h-screen flex items-center justify-center">
        <div className="max-w-140 rounded-xl p-8 flex flex-col gap-5 bg-white w-full">
            <header className="flex items-center justify-between">
                <h1 className="text-preset1 text-grey900 font-bold">Add New Pot</h1>
                <button onClick={closeModal} className="text-grey500"><IoCloseCircleOutline className="w-8 h-8" /></button>
            </header>
            <p className="text-preset4 text-grey500">Create a pot to set savings targets. These can help keep you on track as you save for special purchases.</p>
            <form id='pot-form' onSubmit={handleFormSubmit} action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-preset5 font-bold text-grey500">Pot Name</label>
                    <input type="text" name="name" id="" value={formData.name} onChange={(e)=> handleFormDataChange(e.target.name, e.target.value)} placeholder="e.g. Rainy Days" className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 outline-none" />
                    <span className={`text-preset5  self-end ${formData.name.length > 30 ? 'text-red' : 'text-grey500'}`}>{30 - formData.name.length } characters left</span>
                   {formError.name && <span className="text-xs text-red">{formError.name}</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-preset5 font-bold text-grey500">Target</label>
                    <div className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 flex items-center gap-4">
                        <FaDollarSign className="w-4 h-4" />
                        <input type="number" name="target" id="" value={formData.target} onChange={(e)=> handleFormDataChange(e.target.name, e.target.value)} placeholder="e.g. 2000" className="outline-none flex-1" />
                    </div>
                    {formError.target && <span className="text-xs text-red">{formError.target}</span>}  
                </div>
                <div className="flex flex-col gap-1 relative">
                    <label htmlFor="" className="text-preset5 font-bold text-grey500">Theme</label>
                    <button type="button" onClick={()=> setShowThemeDropdown(prev => !prev)} className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor : selectedTheme.color}}></div>
                        <span className="text-preset4">{selectedTheme.title}</span>
                    </div>
                        <button type="button" ><IoMdArrowDropdown className="w-4 h-4 text-grey900" /></button>
                    </button>
                  {showThemeDropdown && <ThemeDropdown handleSelectedThemeChange={handleSelectedThemeChange} selectedPotThemes={potThemes}/>}
                  {formError.theme && <span className="text-xs text-red">{formError.theme}</span>}
                </div>
            </form>
            <button form='pot-form' type="submit" className="rounded-lg bg-grey900 text-white font-bold text-preset4 h-13 w-full">Add Pot</button>
        </div>
    </div>
  )
}

type ThemeProps={
    handleSelectedThemeChange : (title: string, color : string)=> void;
    selectedPotThemes : string[];
}

function ThemeDropdown({handleSelectedThemeChange, selectedPotThemes} : ThemeProps){
    const themes = [
        {title : 'Green', color: '#277c78'},
        {title : 'Yellow', color: '#f2cdac'},
        {title : 'Cyan', color: '#82c9d7'},
        {title : 'Navy', color: '#626070'},
        {title : 'Red', color: '#c94736'},
        {title : 'Purple', color: '#826cb0'},
        {title : 'Turquoise', color: '#597c7c'},
        {title : 'Brown', color: '#93674f'},
        {title : 'Magenta', color: '#934f6f'},
        {title : 'Blue', color: '#3f82b2'},
        {title : 'Grey', color: '#97a0ac'},
    ]


    return (
        <div className="px-5 py-3 flex flex-col gap-3 rounded-lg bg-white absolute left-0 bottom-16 shadow-dropdown divide-y divide-grey100 h-75 overflow-y-auto w-73">
            {
                themes.map(({title, color}) => <button type="button" disabled={selectedPotThemes.includes(color)} onClick={()=> handleSelectedThemeChange(title, color)} className={`flex items-center gap-2 justify-between pb-3 group ${
                   selectedPotThemes.includes(color) ? 'text-grey500' : 'text-grey900' 
                }`}>
                    <div className="flex items-center gap-3 group-disabled:opacity-45">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor : color}}></div>
                        <span className="text-preset4">{title}</span>
                    </div>
                    {selectedPotThemes.includes(color) && <span className="text-preset5">Already used</span>}
                </button>)
            }

        </div>
    )
}
export default AddNewPotModal