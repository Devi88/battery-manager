import {createAppContainer, createStackNavigator} from "react-navigation";
import BatteryFormComponent from "../view/components/battery/BatteryFormComponent";
import BatteryAddScreen from "../view/screens/BatteryAddScreen";
import BatteryDetailsScreen from "../view/screens/BatteryDetailsScreen";
import BatteriesListScreen from "../view/screens/BatteriesListScreen";

const Navigator = createStackNavigator({
    BatteryList: {
        screen: BatteriesListScreen,
        navigationOptions: () => ({header: null})
    },
    BatteryAdd: {
        screen: BatteryAddScreen,
        navigationOptions: () => ({header: null})
    },
    BatteryEdit: {
        screen: BatteryFormComponent,
        navigationOptions: () => ({header: null})
    },
    BatteryDetails: {
        screen: BatteryDetailsScreen,
        navigationOptions: () => ({header: null})
    }
});

export const Navigation = createAppContainer(Navigator);