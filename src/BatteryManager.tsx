import * as React from "react";
import {Component, PureComponent} from "react";
import {Provider} from "react-redux";
import store from "./redux/store/Store";
import NavigationService from "./navigation/NavigationService";
import {Navigation} from "./navigation/Navigation";
import {View} from "react-native";
import {styles} from "./view/styles/styles";

export default class BatteryManager extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Navigation ref={(navigatorRef: any) => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}/>
                </View>
            </Provider>
        )
    }
}