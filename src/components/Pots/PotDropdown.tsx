function PotDropdown() {
  return <div className="flex flex-col items-start gap-3 px-5 py-3 rounded-lg divide-y divide-grey100 shadow-dropdown bg-white absolute top-14 right-2">
    <button className="text-grey900 text-preset4">Edit Pot</button>
    <button className="text-red text-preset4">Delete Pot</button>
    
  </div>;
}

export default PotDropdown;
