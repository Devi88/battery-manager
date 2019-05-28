import * as React from "react";
import {Component} from "react";
import BatteryFormComponent from "../components/battery/BatteryFormComponent";
import HeaderComponent from "../components/HeaderComponent";
import {View} from "react-native";

interface Props {
}

export default class BatteryAddScreen extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View>
                <HeaderComponent/>
                <BatteryFormComponent/>
            </View>
        )
    }
};

