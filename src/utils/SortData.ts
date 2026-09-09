import type { Transaction } from "../FinanceState";

export default function SortData(data: Transaction[], sortBy: string) {
  let arr = [];
  switch (sortBy) {
    case "Latest":
      arr = data.toSorted((a, b) => {
        let aDate = new Date(a.date).getTime();
        let bDate = new Date(b.date).getTime();
        return bDate - aDate;
      });
      break;
    case "Oldest":
      arr = data.toSorted((a, b) => {
        let aDate = new Date(a.date).getTime();
        let bDate = new Date(b.date).getTime();
        return aDate - bDate;
      });
      break;
    case "A to Z":
      arr = data.toSorted((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z to A":
      arr = data.toSorted((a, b) => b.name.localeCompare(a.name));
      break;
    case "Highest":
      arr = data.toSorted((a, b) => b.amount - a.amount);
      break;
    case "Lowest":
      arr = data.toSorted((a, b) => a.amount - b.amount);
      break;
    default:
      arr = data;
  }

  return arr;
}
