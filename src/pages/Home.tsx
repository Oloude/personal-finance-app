import Budgets from "../components/Homepage/Budgets";
import Pots from "../components/Homepage/Pots";
import RecurringBills from "../components/Homepage/RecurringBills";
import Stats from "../components/Homepage/Stats";
import Transactions from "../components/Homepage/Transactions";

function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-preset1 text-grey900 font-bold">Overview</h1>
      <Stats />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
        <div className="flex flex-col gap-8 lg:col-span-3 lg:gap-6">
          <Pots />
          <Transactions />
        </div>
        <div className="flex flex-col gap-8 lg:col-span-2 lg:gap-6">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
}

export default Home;
