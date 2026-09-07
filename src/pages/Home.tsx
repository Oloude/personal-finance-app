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
      <Pots />
      <Transactions />
      <Budgets/>
      <RecurringBills />
    </div>
  );
}

export default Home;
