import {connect} from "react-redux";
import {Battery} from "../../model/Battery";
import BatteryDetailsComponent from "../../view/components/battery/BatteryDetailsComponent";

interface State  {
    battery: Battery
}

const mapStateToProps = (state: State) => ({
    battery: state.battery
});

export default connect(mapStateToProps, null)(BatteryDetailsComponent);
