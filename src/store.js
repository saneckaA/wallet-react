import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactions/transactionsSlice";
import createSagaMiddleware from "redux-saga";
import { transactionsSaga } from "./features/transactions/transactionsSaga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(transactionsSaga);

