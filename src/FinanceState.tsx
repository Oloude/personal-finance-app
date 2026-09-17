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
    potsThemes : string[];
    handleAddNewPot : (pot : Pot)=> void;  
    handleDeletePot : (pot : Pot)  => void;
    handleEditPot : (oldPot: Pot, newPot:Pot) => void;
    handleAddToPot : (pot: Pot, addition : number) => void;
    handleWithdrawalPot : (pot: Pot, withdrawal: number) => void;
}


const useFinanceState = create<FinanceStateType>((set) => ({
    data : data,
    potsThemes : data.pots.map(pot => pot.theme),
    handleAddNewPot : (pot) => set(state => ({data : {...state.data, pots: [...state.data.pots,pot ]}}) ),
    handleDeletePot : (pot) => set(state => ({data : {...state.data, balance : {...state.data.balance, current : state.data.balance.current + pot.total}, pots: state.data.pots.filter(p => p.name !== pot.name )}})),
    handleEditPot : (oldPot, newPot) => set(state => ({data : {...state.data, pots : state.data.pots.map(p => (p.name === oldPot.name && p.target === oldPot.target) ? {...newPot}: p)}})),
    handleAddToPot : (pot, addition) => set(state => ({data : {...state.data, balance : {...state.data.balance, current : state.data.balance.current - addition}, pots : data.pots.map(p => p.name === pot.name && p.target === pot.target ? {...p, total : p.total + addition}: p)}})),
    handleWithdrawalPot : (pot, withdrawal) => set(state => ({data : {...state.data, balance : {...state.data.balance, current : state.data.balance.current + withdrawal}, pots : data.pots.map(p => p.name === pot.name && p.target === pot.target ? {...p, total : p.total - withdrawal}: p)}})),
}))

export default useFinanceState