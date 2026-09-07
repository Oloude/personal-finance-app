import { create } from "zustand";
import data from '../src/data.json'

export type Balance = {
  current: number;
  income: number;
  expenses: number;
};

export type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export type Budget = {
  category: string;
  maximum: number;
  theme: string;
};

export type Pot = {
  name: string;
  target: number;
  total: number;
  theme : string;
};

export type FinanceData = {
  balance: Balance;
  transactions: Transaction[];
  budgets: Budget[];
  pots: Pot[];
};

type FinanceStateType = {
    data : FinanceData;
}


const useFinanceState = create<FinanceStateType>((set) => ({
    data : data,


}))

export default useFinanceState