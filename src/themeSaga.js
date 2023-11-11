
import { select, takeEvery, takeLatest } from "redux-saga/effects";
import { selectIsDark } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    try {
        const theme = yield select(selectIsDark);
        saveThemeInLocalStorage(theme);
    } catch (error) {
        console.error('Error saving theme to localStorage', error)
    }
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}


