import {Battery, BatteryLiPo} from "../model/Battery";

export function getBatteries(): Array<Battery> {
    return [new BatteryLiPo('Bateria Pierwsza'), new BatteryLiPo('Batteria Druga'), new BatteryLiPo('Batteria Trzecia')];
}


