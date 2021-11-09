import { Subject } from "rxjs";
import { SettingName } from "./configs";


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
    name:SettingName
}

export enum SettingType {
    ConfigValueSetting = "ConfigValueSetting",
    // NumberArraySetting = "NumberArraySetting",
    NumberSetting = "NumberSetting",
    BooleanSetting = "BooleanSetting",
}

export abstract class Setting<T> {

    type:SettingType
    onSettingChanged: Subject<T> = new Subject<T>()
    _value: T;
    name:SettingName

    constructor(value: T, type:SettingType, name:SettingName) {
        this._value = value
        this.type = type
        this.name = name
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

    constructor(value: number, min: number, max: number, name:SettingName) {
        super(value, SettingType.NumberSetting, name)

        this.value = value
        this.min = min
        this.max = max

    }


}

export class ConfigValueSetting extends Setting<ConfigValue> {


    constructor(value: ConfigValue, name:SettingName) {
        super(value, SettingType.ConfigValueSetting, name)

    }


}
export class BooleanSetting extends Setting<boolean> {


    constructor(value: boolean, name:SettingName) {
        super(value, SettingType.BooleanSetting, name)

    }


}
// export class NumberArraySetting extends Setting<number[]> {


//     constructor(value: number[], name:SettingName) {
//         super(value, SettingType.NumberArraySetting, name)

//     }


// }
