import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getTransactionsFromLocalStorage } from "./transactionsLocalStorage";

const initialState = {
    transactions: getTransactionsFromLocalStorage(),
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, {payload: transaction}) => {
            return {
                ...state,
                transactions: [...state.transactions, transaction],
            };
        },
        removeTransaction: (state, action) => {
           state.transactions = state.transactions.filter((transaction) => transaction.id !== action.payload);

        },
        removeAllTransactions: (state) => {
            state.transactions = [];
        },
    },
});

export const { addTransaction, removeTransaction, removeAllTransactions } = transactionsSlice.actions;
export const selectTransactions = state => state.transactions.transactions;
export const selectIsTransactionIncome = createSelector(
    [selectTransactions],
    transactions => transactions.filter(transaction => transaction.price > 0)
);
export const selectIsTransactionExpense = createSelector(
    [selectTransactions],
    transactions => transactions.filter(transaction => transaction.price < 0)
);

export const getTransactionById = (state, transactionId) => selectTransactions(state).find(({id}) => id === transactionId);

export default transactionsSlice.reducer;

