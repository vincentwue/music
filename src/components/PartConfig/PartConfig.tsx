

import { SettingName } from "../../defs/configs/configs"
import { ConfigValue, NumberSetting, SettingType } from "../../defs/configs/settings"
import { createNumberArray, kebabize } from "../../defs/helper"
import { Part } from "../../defs/part"
import { useRerenderOnSubscribableChange } from "../useRerenderOnSubscribableChange"
import classes from "./PartConfig.module.css"

interface IPartConfigProps {
    part: Part
}

export default function PartConfig(props: IPartConfigProps) {

    const part = props.part
    const config = part.subscribableConfig.config

    useRerenderOnSubscribableChange(part)

    // Rerender on config change
    useRerenderOnSubscribableChange(part.subscribableConfig)


    return <div className={classes.container}>

        <button onClick={e => part.init()}>Rebuild</button>

        {config.entries.map(entry => {

            const [name, setting] = entry

            if (part.index === 0 && setting.name === SettingName.CircleOfFifthMaxCloseness) return null
            if (part.index === 0 && setting.name === SettingName.KeyChange) return null

            return <div className={classes.setting}>

                <div className={classes.name}>

                    {kebabize(name).replaceAll("-", " ")}

                </div>

                <div className={classes.input}>

                    {setting.type === SettingType.BooleanSetting
                        &&

                        <input
                            type="checkbox"
                            checked={setting.value as boolean}
                            onChange={e => {
                                setting.value = e.target.checked
                            }}

                        ></input>

                    }

                    {setting.type === SettingType.ConfigValueSetting
                        &&

                        <select onChange={e => setting.value = e.target.value as ConfigValue} value={setting.value as string}>
                            {Object.values(ConfigValue).map(value => {
                                return <option key={value}>{value}</option>
                            })}
                        </select>

                    }

                    {setting.type === SettingType.NumberSetting
                        &&

                        <select onChange={e => setting.value = parseFloat(e.target.value)} value={setting.value.toString()}>
                            {createNumberArray((setting as unknown as NumberSetting).min, (setting as unknown as NumberSetting).max).map(value => {
                                return <option key={value.toString()}>{value}</option>
                            })}
                        </select>

                    }

                </div>

                <div className={classes.info}>
                
                    {setting.name === SettingName.JazzyProgressionness && part.chordProgression.counter_251}
                
                </div>

            </div>

        })}

        <div className={classes.resultName}>
        

        { "Result: "+part.scale.name}

        </div>

        <div className={classes.result}>
        
            {part.bars.map(bar => {
                return <div className={classes.bar}>
                
                    {bar.chords.map(chord => {
                        return <div className={classes.chord}>
                        
                            {chord && chord.step + " - "}
                            {chord && chord.render}
                        
                        </div>
                    })}
                
                </div>
            })}
        
        </div>

    </div>

}