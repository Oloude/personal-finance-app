const sorts = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

function SortDropdown() {
  return (
    <div className="flex flex-col gap-3 px-5 py-3 divide-y divide-grey100 absolute top-6 md:top-13 right-0 z-10 bg-white rounded-lg shadow-dropdown">
      {
        sorts.map(sort => <button className={`text-preset4 text-grey900 pb-3`}>{sort}</button>)
    }
    </div>
  );
}

export default SortDropdown;
