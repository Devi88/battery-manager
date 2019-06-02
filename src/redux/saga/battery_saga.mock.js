import {put, takeEvery, takeLatest,  take, fork} from 'redux-saga/effects'
import BatteryActionType from "../actions/battery/BatteryActionType";
import {BatteryLiPo} from "../../model/Battery";
import {addBatteryRequestActionComplete, getBatteriesRequestActionComplete} from "../actions/battery/BatteryActions";

export function* getBatteriesSaga() {
    yield takeLatest(BatteryActionType.GET_BATTERIES_REQUEST, requestBatteries);
}

export function* addBatterySaga() {
    yield takeEvery(BatteryActionType.ADD_BATTERY_REQUEST, requestAddBattery);
}

function* requestBatteries() {
    try {
        const batteries = [new BatteryLiPo('Batteria 1'), new BatteryLiPo('Batteria 2'), new BatteryLiPo('Batteria 3')];
        yield put(getBatteriesRequestActionComplete(batteries));
    } catch (e) {
        console.log('Error', e);
    }
}

function* requestAddBattery(action) {
    try {
        yield put(addBatteryRequestActionComplete(new BatteryLiPo(action.data.name)))
    } catch (e) {
        console.log('Error', e);
    }
}