import { selectTransactions } from "./transactionsSlice";
import { saveTtransactionsInLocalStorage } from "./transactionsLocalStorage";
import { call, select, takeEvery } from "redux-saga/effects";


function* saveTransactionsInLocalStorageHandler() {
      const transactions = yield select(selectTransactions);
      yield call(saveTtransactionsInLocalStorage, transactions);
}

export function* transactionsSaga() {
    yield takeEvery("*", saveTransactionsInLocalStorageHandler);
}