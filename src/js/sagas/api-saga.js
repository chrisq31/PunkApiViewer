import {DATA_REQUESTED, DATA_LOADED, API_ERRORED} from "../constants/action-types";

import {takeLatest, call, put, all} from "redux-saga/effects";
import axios from 'axios';


// the 'watcher' - on every 'DATA_REQUESTED' action, run our side effect
function* watcherGetDataSaga() {
    yield takeLatest(DATA_REQUESTED, workerGetDataSaga);
}


// get data side effect
function* workerGetDataSaga() {
    try {
        const payload = yield call(getDataAxios);
        yield put({type: DATA_LOADED, payload});
    } catch (e) {
        yield put({type: API_ERRORED, payload: e});
    }
}


function getDataAxios() {

    const url = "https://api.punkapi.com/v2/beers";
    return axios.get(url).then(response =>
        response.data
    );
}


export default function* rootSaga() {
    yield all([
        watcherGetDataSaga(),
    ])
}
