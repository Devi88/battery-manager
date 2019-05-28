import {State} from "../reducres/RootReducer";
import {createSelector} from "reselect";

const getBatteriesState = (state: State) => state.batteries;

export const getBatteries = createSelector([getBatteriesState], s => s.batteries);