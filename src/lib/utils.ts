export function getUuid() {
    const uuid = require('uuid/v1');
    return uuid();
}

export interface BatteryFormData {
    name: string
}