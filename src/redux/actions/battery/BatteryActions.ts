import {
    AddBatteryReceivedActionI, AddBatteryRequestActionI,
    GetBatteriesReceivedActionI,
    GetBatteriesRequestActionI
} from "./BatteryActionInterfaces";
import {Battery} from "../../../model/Battery";
import BatteryActionType from "./BatteryActionType";
import {BatteryFormData} from "../../../lib/utils";

export function getBatteriesRequestAction(): GetBatteriesRequestActionI {
    return {
        type: BatteryActionType.GET_BATTERIES_REQUEST
    }
}

export function getBatteriesRequestActionComplete(batteries: Array<Battery>): GetBatteriesReceivedActionI {
    return {
        type: BatteryActionType.GET_BATTERIES_RECEIVED,
        data: batteries
    }
}

export function addBatteryRequestAction(batteryFormData: BatteryFormData): AddBatteryRequestActionI {
    return {
        type: BatteryActionType.ADD_BATTERY_REQUEST,
        data: batteryFormData
    }
}

export function addBatteryRequestActionComplete(battery: Battery): AddBatteryReceivedActionI {
    return {
        type: BatteryActionType.ADD_BATTERY_RECEIVED,
        data: battery
    }
}


