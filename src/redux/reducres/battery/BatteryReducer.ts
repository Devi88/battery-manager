import {Battery} from "../../../model/Battery";
import {BatteryActionI} from "../../actions/battery/BatteryActionInterfaces";
import BatteryActionType from "../../actions/battery/BatteryActionType";

export interface State {
    batteries: Array<Battery>;
}

export const initialState: State = {
    batteries: new Array<Battery>()
};

export function reducer(state: State = initialState, action: BatteryActionI) {
    switch (action.type) {
        case BatteryActionType.GET_BATTERIES_REQUEST: {
            return {...state, batteries: [], loading: true}
        }
        case BatteryActionType.GET_BATTERIES_RECEIVED: {
            return {...state, batteries: action.data, loading: false}
        }

        case BatteryActionType.GET_BATTERY_REQUEST: {
            return {...state, loading: true}
        }

        case BatteryActionType.GET_BATTERY_RECEIVED: {
            return {...state, batteries: [...state.batteries, action.data], loading: true}
        }

        case BatteryActionType.ADD_BATTERY_REQUEST: {
            return {...state, loading: true}
        }

        case BatteryActionType.ADD_BATTERY_RECEIVED: {
            return {...state, batteries: [...state.batteries, action.data], loading: true}
        }

        default:
            return state;
    }
}