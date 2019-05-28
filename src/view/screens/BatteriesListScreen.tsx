import {Component} from "react";
import * as React from "react";
import {View} from "react-native";
import {styles} from "../styles/styles";
import HeaderComponent from "../components/HeaderComponent";
import BatteriesListComponentContainer from "../../redux/containers/BatteriesListComponentContainer";

export default class BatteriesListScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <HeaderComponent/>
                <BatteriesListComponentContainer />
            </View>
        )
    }
}
