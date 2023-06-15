import { call, select, takeEvery } from "redux-saga/effects";
import { saveModeInLocalStorage } from "./modeLocalStorage";
import { selectIsDarkMode } from "./modeSlice";

function* saveModeInLocalStorageHandler() {
    const mode = yield select(selectIsDarkMode);
    yield call(saveModeInLocalStorage, mode);
};

export function* modeSaga() {
    yield takeEvery("*", saveModeInLocalStorageHandler);
};