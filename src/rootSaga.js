import { all } from "redux-saga/effects";
import { transactionsSaga } from "./features/transactions/transactionsSaga";
import { themeSaga } from "./themeSaga";

export default function* rootSaga () {
    yield all([
        transactionsSaga(),
        themeSaga(),
    ]);
}