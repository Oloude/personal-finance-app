import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiSortAscendingFill } from "react-icons/pi";
import { TiFilter } from "react-icons/ti";
import SortDropdown from "./SortDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { useState } from "react";

type FilterProps = {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

function Filter({
  sortBy,
  setSortBy,
  category,
  setCategory,
  searchQuery,
  setSearchQuery,
}: FilterProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  function handleToggleShowSortDropdown() {
    setShowSortDropdown((prev) => !prev);
  }

  function handleToggleShowCategoryDropdown() {
    setShowCategoryDropdown((prev) => !prev);
  }

  return (
    <>
      <MobileFilter
        showSortDropdown={showSortDropdown}
        showCategoryDropdown={showCategoryDropdown}
        handleToggleShowSortDropdown={handleToggleShowSortDropdown}
        handleToggleShowCategoryDropdown={handleToggleShowCategoryDropdown}
        sortBy={sortBy}
        setSortBy={setSortBy}
        category={category}
        setCategory={setCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <DesktopFilter
        showSortDropdown={showSortDropdown}
        showCategoryDropdown={showCategoryDropdown}
        handleToggleShowSortDropdown={handleToggleShowSortDropdown}
        handleToggleShowCategoryDropdown={handleToggleShowCategoryDropdown}
        sortBy={sortBy}
        setSortBy={setSortBy}
        category={category}
        setCategory={setCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}

export default Filter;

type MobileFilterProps = {
  showSortDropdown: boolean;
  showCategoryDropdown: boolean;
  handleToggleShowSortDropdown: () => void;
  handleToggleShowCategoryDropdown: () => void;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

function MobileFilter({
  showSortDropdown,
  showCategoryDropdown,
  handleToggleShowSortDropdown,
  handleToggleShowCategoryDropdown,
  sortBy,
  setSortBy,
  category,
  setCategory,
  searchQuery,
  setSearchQuery,
}: MobileFilterProps) {
  return (
    <div className="flex items-center gap-4 justify-between md:hidden">
      <div className="border border-beige500 rounded-lg px-5 py-3 flex gap-4 items-center min-w-0">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search transaction"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 min-w-0 outline-none text-beige500 text-preset4"
        />
        <button className="shrink-0 text-grey900">
          <IoSearch className="w-4 h-4 " />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={handleToggleShowSortDropdown}
          className="text-grey900 relative"
        >
          <PiSortAscendingFill className="w-5 h-5" />
          {showSortDropdown && (
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          )}
        </button>
        <button
          onClick={handleToggleShowCategoryDropdown}
          className="text-grey900 relative"
        >
          <TiFilter className="w-5 h-5" />
          {showCategoryDropdown && (
            <CategoryDropdown category={category} setCategory={setCategory} />
          )}
        </button>
      </div>
    </div>
  );
}

function DesktopFilter({
  showSortDropdown,
  showCategoryDropdown,
  handleToggleShowSortDropdown,
  handleToggleShowCategoryDropdown,
  sortBy,
  setSortBy,
  category,
  setCategory,
  searchQuery,
  setSearchQuery,
}: MobileFilterProps) {
  return (
    <div className="md:flex items-center gap-6 justify-between hidden">
      <div className="border border-beige500 rounded-lg px-5 py-3 flex gap-4 items-center min-w-0">
        <input
          type="search"
          name=""
          id=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search transaction"
          className="flex-1 min-w-0 outline-none text-beige500 text-preset4"
        />
        <button className="shrink-0 text-grey900">
          <IoSearch className="w-4 h-4 " />
        </button>
      </div>
      <div className="flex items-center gap-6 min-w-0 ">
        <div className="flex gap-2 items-center relative">
          <label htmlFor="" className="text-beige500 text-preset4">
            Sort by
          </label>
          <div className="border border-beige500 rounded-lg px-5 py-3 text-preset4 text-grey900 flex items-center gap-2">
            <span>{sortBy}</span>
            <button onClick={handleToggleShowSortDropdown}>
              <IoMdArrowDropdown className="w-4 h-4" />
            </button>
          </div>
          {showSortDropdown && (
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          )}
        </div>
        <div className="flex gap-2 items-center relative">
          <label htmlFor="" className="text-beige500 text-preset4">
            Category
          </label>
          <div className="border border-beige500 rounded-lg px-4 py-3 text-preset4 text-grey900 flex items-center gap-2">
            <span>{category}</span>
            <button onClick={handleToggleShowCategoryDropdown}>
              <IoMdArrowDropdown className="w-4 h-4" />
            </button>
          </div>
          {showCategoryDropdown && (
            <CategoryDropdown category={category} setCategory={setCategory} />
          )}
        </div>
      </div>
    </div>
  );
}
