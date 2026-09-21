import { useEffect, useState } from "react";
import Filter from "../components/Transactions/Filter";
import Pagination from "../components/Transactions/Pagination";
import TransactionTable from "../components/Transactions/TransactionTable";
import useFinanceState from "../FinanceState";
import SortData from "../utils/SortData";

function Transactions() {
  const transactions = useFinanceState((state) => state.data).transactions;
  const category = useFinanceState(state => state.category)
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Latest");
  
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = SortData(
    transactions.filter((transaction) => {
      if (
        category !== "All Transactions" &&
        transaction.category !== category
      ) {
        return false;
      }
      if (
        searchQuery.trim() &&
        !transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    }),
    sortBy,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchQuery]);

  const totalPageNumber = Math.ceil(filteredTransactions.length / 10);
  let startIndex = (currentPage - 1) * 10;
  let endIndex = currentPage * 10;
  let visibleTransactions = filteredTransactions.slice(startIndex, endIndex);

  return (
    <div className="space-y-8">
      <h1></h1>
      <section className="bg-white rounded-xl px-5 py-6 flex flex-col gap-6">
        <Filter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          category={category}
        />
        <TransactionTable transactions={visibleTransactions} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPageNumber={totalPageNumber}
        />
      </section>
    </div>
  );
}

export default Transactions;
