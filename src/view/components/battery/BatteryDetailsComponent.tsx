import {Battery} from "../../../model/Battery";
import React, {Component} from "react";
import {Text, View} from "react-native";
import {styles} from "../../styles/styles";

interface Props {
    battery: Battery
}

export default class BatteryDetailsComponent extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {battery} = this.props;

        return (
            <View style={styles.battery_list_item_content}>
                <Text>Szczegóły </Text>
                <Text>{battery.getName()}</Text>
                <Text> {battery.getId()}</Text>
            </View>
        )
    }
}