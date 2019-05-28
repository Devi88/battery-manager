import * as BatteryReducer from './battery/BatteryReducer'
import {combineReducers} from "redux";

export interface State {
    batteries: BatteryReducer.State;
}

export const initialState: State = {
    batteries: BatteryReducer.initialState
};

export const reducer = combineReducers<State>({
    batteries: BatteryReducer.reducer,
});