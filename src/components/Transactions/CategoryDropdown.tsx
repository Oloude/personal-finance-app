import useFinanceState from "../../FinanceState";

type CategoryProps = {
  category : string; 
  setCategory : React.Dispatch<React.SetStateAction<string>>;
}

function CategoryDropdown({category, setCategory} : CategoryProps) {
  const transactions = useFinanceState(state => state.data).transactions

  let allCategory = transactions.map(transaction => transaction.category)
  let uniqueCategory = [...new Set(allCategory)]


  return (
    <div className="flex flex-col items-start gap-3 px-5 py-3 divide-y divide-grey100 absolute top-6 md:top-13 right-0 z-10 bg-white rounded-lg shadow-dropdown">
      
      {['All Transactions', ...uniqueCategory].map((currentCategory) => (
        <button onClick={()=> setCategory(currentCategory)} className={`text-preset4 text-grey900 pb-3 ${category === currentCategory ? 'font-bold' : ''}`}>{currentCategory}</button>
      ))}
    </div>
  );
}

export default CategoryDropdown;
