import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactions/transactionsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

