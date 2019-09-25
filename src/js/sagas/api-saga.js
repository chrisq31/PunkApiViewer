import { DATA_REQUESTED,DATA_LOADED,API_ERRORED,SHOW_DETAILED_VIEW,APP_READY} from "../constants/action-types";

import { takeEvery, takeLatest,call, put,all } from "redux-saga/effects";
import axios from 'axios';

function* watcherGetDetailedViewSaga() {
    yield takeEvery(SHOW_DETAILED_VIEW, workerGetDetailedSaga);
}

function* workerGetDetailedSaga() {
    try {

        console.log('get data detailed')
        //const payload = yield call(getData);
        //yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}




// the 'watcher' - on every 'DATA_REQUESTED' action, run our side effect
function* watcherGetDataSaga() {
    yield takeLatest(DATA_REQUESTED, workerGetDataSaga);
}


// get data side effect
function* workerGetDataSaga() {
    try {
        const payload = yield call(getDataAxios);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}




function getDataAxios() {

    const url = "https://api.punkapi.com/v2/beers";
    return axios.get(url).then(response =>
        response.data
    );
}


function* watcherDataLoaded() {
    yield takeEvery(APP_READY, workerDataLoadedSaga);
}

function* workerDataLoadedSaga(){

    console.log('workerDataLoadedSaga....')

}


export default function* rootSaga() {
    yield all([
        watcherDataLoaded,
        watcherGetDataSaga(),
        watcherGetDetailedViewSaga()


    ])
}
