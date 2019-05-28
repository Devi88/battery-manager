import React, {Component} from "react";
import {View} from "react-native";
import {Toolbar} from "react-native-material-ui";

interface Props {}

export default class HeaderComponent extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Toolbar
                    centerElement="Battery Manager"
                />
            </View>
        )
    }
}
