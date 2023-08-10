import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactions: [],
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
export const selectIsTransactionIncome = state => selectTransactions(state).filter(transaction => transaction.price > 0);
export const selectIsTransactionExpense = state => selectTransactions(state).filter(transaction => transaction.price < 0);

export default transactionsSlice.reducer;

