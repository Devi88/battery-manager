import * as React from "react";
import {Component} from "react";
import {FlatList, ListRenderItemInfo, View} from "react-native";
import {Battery} from "../../../model/Battery";
import {styles} from "../../styles/styles";
import {ActionButton} from 'react-native-material-ui';
import BatteryItemComponent from "./BatteryItemComponent";
import NavigationService from "../../../navigation/NavigationService";

interface Props {
    batteries: Array<Battery>,
    getBatteriesRequestAction: () => void
}

export default class BatteriesListComponent extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getBatteriesRequestAction();
    }

    static _renderItem({item}: ListRenderItemInfo<Battery>) {
        return <BatteryItemComponent battery={item}/>;
    }

    static _keyExtractor(battery: Battery): string {
        return battery.getId();
    };

    static _addBatteryAction() {
        NavigationService.navigate('BatteryAdd', {});
    }

    render() {
        const batteries = this.props.batteries;

        return (
            <View style={styles.container}>
                <FlatList data={batteries}
                          renderItem={BatteriesListComponent._renderItem}
                          keyExtractor={BatteriesListComponent._keyExtractor}
                          ItemSeparatorComponent={() => {
                              return (
                                  <View style={styles.battery_list_separator}/>
                              )
                          }}
                />

                <ActionButton onPress={BatteriesListComponent._addBatteryAction.bind(this)}/>
            </View>
        )
    }
}

