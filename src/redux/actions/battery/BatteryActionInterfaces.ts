import {Battery} from '../../../model/Battery';
import BatteryActionType from "./BatteryActionType";
import {BatteryFormData} from "../../../lib/utils";

export interface GetBatteriesRequestActionI {
    type: BatteryActionType.GET_BATTERIES_REQUEST
}

export interface GetBatteriesReceivedActionI {
    type: BatteryActionType.GET_BATTERIES_RECEIVED,
    data: Array<Battery>
}

export interface GetBatteryRequestActionI {
    type: BatteryActionType.GET_BATTERY_REQUEST
}

export interface GetBatteryReceiveActionI {
    type: BatteryActionType.GET_BATTERY_RECEIVED,
    data: Battery
}

export interface AddBatteryRequestActionI {
    type: BatteryActionType.ADD_BATTERY_REQUEST,
    data: BatteryFormData
}

export interface AddBatteryReceivedActionI {
    type: BatteryActionType.ADD_BATTERY_RECEIVED,
    data: Battery
}

////////////

export interface UpdateBatteryActionI {
    type: BatteryActionType.BATTERY_UPDATE,
    data: Battery
}


export interface EditBatteryActionI {
    type: BatteryActionType.BATTERY_EDIT,
    data: Battery
}


export interface DeleteBatteryActionI {
    type: BatteryActionType.BATTERY_DELETE
}

export type BatteryActionI =
    UpdateBatteryActionI
    | EditBatteryActionI
    | DeleteBatteryActionI
    | GetBatteriesRequestActionI
    | GetBatteriesReceivedActionI
    | GetBatteryRequestActionI
    | GetBatteryReceiveActionI
    | AddBatteryRequestActionI
    | AddBatteryReceivedActionI
