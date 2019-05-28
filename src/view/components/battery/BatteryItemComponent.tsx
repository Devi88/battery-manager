import React from 'react';
import {Component} from 'react';
import {Battery} from '../../../model/Battery';
import NavigationService from '../../../navigation/NavigationService';
import {ListItem} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    battery: Battery
}

export default class BatteryItemComponent extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    _selectBattery() {
        const {battery} = this.props;
        NavigationService.navigate('BatteryDetails', {battery: battery})
    }

    render() {
        let {battery} = this.props;

        return (
            <ListItem centerElement={{primaryText: battery.getName()}} leftElement={<Icon name={"battery-empty"} size={35}/>} onPress={this._selectBattery.bind(this)} />
        )
    }
}
