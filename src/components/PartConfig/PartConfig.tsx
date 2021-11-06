

import { SettingType } from "../../defs/configs/settings"
import { Part } from "../../defs/part"
import { useRerenderOnSubscribableChange } from "../useRerenderOnSubscribableChange"
import classes from "./PartConfig.module.css"

interface IPartConfigProps {
    part: Part
}

export default function PartConfig(props: IPartConfigProps) {

    const part = props.part

    // Rerender on config change
    useRerenderOnSubscribableChange(part.subscribableConfig)

    return <div className={classes.container}>

        {part.subscribableConfig.config.entries.map(entry => {

            const [name, setting] = entry

            return <div className={classes.setting}>

                <div className={classes.name}>

                    {name}

                </div>

                <div className={classes.input}>

                    {setting.type === SettingType.BooleanSetting
                        &&

                        <input
                            type="checkbox"
                            checked={setting.value as boolean}
                            onChange={e => {
                                console.log("change",e.target.checked, setting)
                                setting.value = e.target.checked
                            }}

                        ></input>

                    }

                </div>

            </div>

        })}


    </div>

}