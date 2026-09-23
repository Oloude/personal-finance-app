import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiSortAscendingFill } from "react-icons/pi";
import SortDropdown from "./SortDropdown";

type FilterProps = {
    showDropdown : boolean; 
    handleToggleShowDropdown : ()=> void;
    sortBy : string; 
    setSortBy : React.Dispatch<React.SetStateAction<string>>;
    searchQuery : string; 
    handleSearchQueryChange : (value: string) => void;
}

function Filter({showDropdown, handleToggleShowDropdown, sortBy, setSortBy, searchQuery, handleSearchQueryChange}: FilterProps) {
  return (
    <div className="flex items-center gap-6 justify-between">
      <div className="border border-beige500 rounded-lg px-5 py-3 flex gap-4 items-center min-w-0">
        <input
          type="search"
          name=""
          id=""
          value={searchQuery}
          onChange={ (e)=> handleSearchQueryChange(e.target.value)}
          placeholder="Search transaction"
          className="flex-1 min-w-0 outline-none text-beige500 text-preset4"
        />
        <button className="shrink-0 text-grey900">
          <IoSearch className="w-4 h-4 " />
        </button>
      </div>
      <button onClick={handleToggleShowDropdown} className="md:hidden">
        <PiSortAscendingFill className="w-5 h-5" />
      </button>
      <div className="md:flex gap-2 items-center relative hidden">
        <label htmlFor="" className="text-beige500 text-preset4">
          Sort by
        </label>
        <div className="border border-beige500 rounded-lg px-5 py-3 text-preset4 text-grey900 flex items-center gap-2">
          <span>{sortBy}</span>
          <button onClick={handleToggleShowDropdown}>
            <IoMdArrowDropdown className="w-4 h-4" />
          </button>
        </div>
        {showDropdown && (
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          )}
      </div>
    </div>
  );
}

export default Filter;
