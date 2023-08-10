import { all } from "redux-saga/effects";
import { transactionsSaga } from "./features/transactions/transactionsSaga";

export default function* rootSaga () {
    yield all([
        transactionsSaga(),
    ]);
}