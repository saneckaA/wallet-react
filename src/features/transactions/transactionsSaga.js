import { selectTransactions } from "./transactionsSlice";
import { saveThemeInLocalStorage, saveTtransactionsInLocalStorage } from "./transactionsLocalStorage";
import { call, select, takeEvery } from "redux-saga/effects";
import { useSwitchTheme } from "../../useSwitchTheme";


function* saveTransactionsInLocalStorageHandler() {
      const transactions = yield select(selectTransactions);
      yield call(saveTtransactionsInLocalStorage, transactions);
}

export function* transactionsSaga() {
    yield takeEvery("*", saveTransactionsInLocalStorageHandler);
}

function* saveThemeInLocalStorageHandler() {
    const theme = yield useSwitchTheme;
    yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}