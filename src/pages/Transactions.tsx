import Filter from "../components/Transactions/Filter";
import Pagination from "../components/Transactions/Pagination";
import TransactionTable from "../components/Transactions/TransactionTable";

function Transactions() {
  return <div className="space-y-8">
    <h1></h1>
    <section className="bg-white rounded-xl px-5 py-6 flex flex-col gap-6">
      <Filter/>
      <TransactionTable/>
      <Pagination/>
    </section>
  </div>;
}

export default Transactions;
