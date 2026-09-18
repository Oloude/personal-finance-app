type HeaderProps = {
  openAddNewBudgetModal : ()=> void;
}

function Header({openAddNewBudgetModal} : HeaderProps) {
  return (
    <header className="flex items-center justify-between">
    <h1 className="text-preset1 text-grey900 font-bold">Budgets</h1>
    <button onClick={openAddNewBudgetModal} className="p-4 flex items-center justify-center rounded-2xl bg-grey900 text-white text-preset4 font-bold">+ Add New Budget</button>

  </header>
  )
}

export default Header