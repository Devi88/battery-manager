import {Component, default as React} from "react";
import {View} from "react-native";
import {styles} from "../styles/styles";
import HeaderComponent from "../components/HeaderComponent";
import {NavigationScreenProp} from "react-navigation";
import BatteryDetailsComponent from "../components/battery/BatteryDetailsComponent";




interface Props {
   navigation: NavigationScreenProp<any>;
}

export default class BatteryDetailsScreen extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        console.log('BatteryDetailsScreen', this.props);
        return (
            <View style={styles.container}>
                <HeaderComponent />
                <BatteryDetailsComponent battery={this.props.navigation.state.params.battery}/>
            </View>
        )
    }
}
