import { takeLatest, call, delay, put} from "redux-saga/effects";
import { getApiCode } from "./getApiCode";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from "./personalHomepageSlice";

function* fetchRepositoriesHandler() {
    try {
        yield delay(2000);
        const repositories = yield call(getApiCode);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
};

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};