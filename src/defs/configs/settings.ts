import { Subject } from "rxjs";


export enum ConfigValue {
    None = "none",
    Rare = "rare",
    Medium = "medium",
    WellDone = "well done",
    Insane = "insane"
}


export enum UserInput {
    CheckBox = "checkbox",
    Select = "select",
    NumberDropdown = "numberDropdown"
}

export type ISettingValue = number | boolean | ConfigValue | number[]

export interface ISetting {
    value: ISettingValue
    userInput: UserInput
    onSettingChanged: Subject<any>
    type: SettingType
}

export enum SettingType {
    ConfigValueSetting = "ConfigValueSetting",
    NumberArraySetting = "NumberArraySetting",
    NumberSetting = "NumberSetting",
    BooleanSetting = "BooleanSetting",
}

export abstract class Setting<T> {

    type:SettingType
    onSettingChanged: Subject<T> = new Subject<T>()
    _value: T;

    constructor(value: T, type:SettingType) {
        this._value = value
        this.type = type
    }

    set value(value: T) {
        this._value = value
        console.log("value set", value)
        this.onSettingChanged.next(value)
    }

    get value() {
        return this._value
    }



}


export class NumberSetting extends Setting<number> {

    min
    max

    constructor(value: number, min: number, max: number) {
        super(value, SettingType.NumberSetting)

        this.value = value
        this.min = min
        this.max = max

    }


}

export class ConfigValueSetting extends Setting<ConfigValue> {


    constructor(value: ConfigValue) {
        super(value, SettingType.ConfigValueSetting)

    }


}
export class BooleanSetting extends Setting<boolean> {


    constructor(value: boolean) {
        super(value, SettingType.BooleanSetting)

    }


}
export class NumberArraySetting extends Setting<number[]> {


    constructor(value: number[]) {
        super(value, SettingType.NumberArraySetting)

    }


}
