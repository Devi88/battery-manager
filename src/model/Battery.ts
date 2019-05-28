import BatteryType from './BatteryType';
import {getUuid} from "../lib/utils";

export abstract class Battery {
    protected constructor(protected name: string, protected type: number, protected id: string) {
        this.name = name;
        this.type = type;
        this.id = id;
    };

    getName(): string {
        return this.name;
    }

    getId(): string {
        return this.id;
    }
}

export class BatteryNiCd extends Battery {
    constructor(name: string) {
        super(name, BatteryType.NiCd, getUuid());
    }
}

export class BatteryNiMH extends Battery {
    constructor(name: string) {
        super(name, BatteryType.NiMH, getUuid());
    }
}

export class BatteryLiIon extends Battery {
    constructor(name: string) {
        super(name, BatteryType.LiIon, getUuid());
    }
}

export class BatteryLiPo extends Battery {
    constructor(name: string) {
        super(name, BatteryType.LiPo, getUuid());
    }
}