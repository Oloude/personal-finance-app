//  - Don't worry if you can't create a donut pie chart exactly like in the design. Do your best to get close, but feel free to go in your own direction.
//   - The "Spent" amount should calculate the money spent within the category for the current month (August 2024 in the app).
//   - The "Latest Spending" component should display the three last transactions for that category regardless of the month.
//   - Clicking "See All" on a budget should navigate to the Transactions page with the filter set to the relevant category. For example, clicking "See All" on Entertainment should only show transactions with the Entertainment category.
//   - Adding a new budget should automatically pull in the three latest transactions from the created budget category and calculate the amount spent so far for August 2024.
//   - Deleting a budget should remove it from the Budgets page and the Overview.

import BudgetContainer from "../components/Budgets/BudgetContainer";
import Header from "../components/Budgets/Header";
import SpendingSummary from "../components/Budgets/SpendingSummary";

function Budgets() {
  return <div className="flex flex-col gap-8">
    <Header/>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <SpendingSummary/>
      <BudgetContainer/>
    </div>
    
  </div>;
}

export default Budgets;
