import {BatteryActionWatch} from './saga.mock'
import {all} from 'redux-saga/effects'

export const rootSaga = function* () {
    yield all([
        BatteryActionWatch()
    ]);
};