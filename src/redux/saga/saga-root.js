import {all,fork} from 'redux-saga/effects'

import * as batterySagas from "./battery_saga.mock";

export default function* rootSaga() {
    yield all([
        ...Object.values(batterySagas)
    ].map(fork));
};