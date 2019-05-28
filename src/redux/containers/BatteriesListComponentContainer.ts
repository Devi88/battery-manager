import {connect} from "react-redux";
import {addBatteryRequestAction, getBatteriesRequestAction} from "../actions/battery/BatteryActions";
import {getBatteries} from "../selectors/BatterySelectors";
import {State} from "../reducres/RootReducer";
import BatteriesListComponent from "../../view/components/battery/BatteriesListComponent";

const mapStateToProps = (state: State) => ({
    batteries: getBatteries(state)
});

const mapDispatchToProps = ({
    getBatteriesRequestAction,
    addBatteryRequestAction
});

export default connect(mapStateToProps, mapDispatchToProps)(BatteriesListComponent);

