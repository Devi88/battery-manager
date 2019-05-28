import {put, takeEvery, take} from 'redux-saga/effects'
import BatteryActionType from "../actions/battery/BatteryActionType";
import {BatteryLiPo} from "../../model/Battery";
import {addBatteryRequestActionComplete, getBatteriesRequestActionComplete} from "../actions/battery/BatteryActions";

export function* BatteryActionWatch() {
    yield takeEvery(BatteryActionType.GET_BATTERIES_REQUEST, requestBatteries);
    yield takeEvery(BatteryActionType.ADD_BATTERY_REQUEST, requestAddBattery);
}

function* requestBatteries() {
    const batteries = [new BatteryLiPo('Batteria 1'), new BatteryLiPo('Batteria 2'), new BatteryLiPo('Batteria 3')];
    yield put(getBatteriesRequestActionComplete(batteries))
}

function* requestAddBattery() {
    const {data} = yield take(BatteryActionType.ADD_BATTERY_REQUEST);
    const battery = new BatteryLiPo(data.name);
    yield put(addBatteryRequestActionComplete(battery))
}