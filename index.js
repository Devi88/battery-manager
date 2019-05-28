import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import BatteryManager from "./src/BatteryManager";

AppRegistry.registerComponent(appName, () => BatteryManager);
