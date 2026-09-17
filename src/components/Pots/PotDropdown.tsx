type PotDropdownProps = {
  openDeleteModal : ()=> void;
  openEditModal : ()=> void;
}

function PotDropdown({openDeleteModal, openEditModal} : PotDropdownProps) {
  return <div className="flex flex-col items-start gap-3 px-5 py-3 rounded-lg divide-y divide-grey100 shadow-dropdown bg-white absolute top-14 right-2">
    <button onClick={openEditModal}  className="text-grey900 text-preset4 pb-3">Edit Pot</button>
    <button onClick={openDeleteModal}  className="text-red text-preset4">Delete Pot</button>
    
  </div>;
}

export default PotDropdown;
