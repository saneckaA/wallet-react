import { useEffect, useState } from "react";

export const useTransactions = () => {


const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions")) || []);

useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}, [transactions]);

const removeTransaction = (id) => {
  setTransactions(transactions => transactions.filter(transaction => transaction.id !== id));
};

const removeAllTransactions = () => {
  setTransactions([]);
};
const incomeTransactions = transactions.filter(transaction => transaction.price > 0);
const expenseTransactions = transactions.filter(transaction => transaction.price < 0);

const addNewTransaction = (newContentName, newContentPrice) => {
 
    const NewTransaction = {
    
      content: newContentName,
      price: newContentPrice,
      id: transactions.length ? transactions[transactions.length - 1].id + 1 : 1,
    };
    setTransactions(transactions => [
        ...transactions, NewTransaction]);
};



const calculateTotal = (transactions) => {
  return transactions.reduce((total, transaction) => total + parseFloat(transaction.price), 0);
};
const incomeTotal = calculateTotal(incomeTransactions);
const expenseTotal = calculateTotal(expenseTransactions.map(transaction => ({ ...transaction, price: -1 * transaction.price })));

const finalAmount = (incomeTotal - expenseTotal);

return {
    transactions,
    setTransactions,
    removeTransaction,
    removeAllTransactions,
    addNewTransaction,
    incomeTransactions,
    expenseTransactions,
    calculateTotal,
    incomeTotal,
    expenseTotal,
    finalAmount,
};

};