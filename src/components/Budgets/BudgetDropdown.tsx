type BudgetDropdownProps = {
  openDeleteModal: () => void;
  openEditBudgetModal: () => void;
};

function BudgetDropdown({
  openDeleteModal,
  openEditBudgetModal,
}: BudgetDropdownProps) {
  return (
    <div className="flex flex-col items-start gap-3 px-5 py-3 rounded-lg divide-y divide-grey100 shadow-dropdown bg-white absolute top-5 right-2">
      <button
        onClick={openEditBudgetModal}
        className="text-grey900 text-preset4 pb-3"
      >
        Edit Budget
      </button>
      <button onClick={openDeleteModal} className="text-red text-preset4">
        Delete Budget
      </button>
    </div>
  );
}

export default BudgetDropdown;
