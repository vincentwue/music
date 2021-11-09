import { useState } from "react"
import MainController from "../../defs/mainController"
import PartConfig from "../PartConfig/PartConfig"
import Sheet from "../Sheet/Sheet"
import { useRerenderOnSubscribableChange } from "../useRerenderOnSubscribableChange"
import classes from "./main.module.css"


export default function Main() {

    const [partsString, setPartsString] = useState(MainController.tune.partOrder.toString().replaceAll(",", ""))

    useRerenderOnSubscribableChange(MainController.tune)

    // if (MainController.tune.partOrder.toString().replaceAll(",", "") !== partsString) {
    //     setPartsString(MainController.tune.partOrder.toString().replaceAll(",", ""))
    // }

    return <div className={classes.container}>



        <div className={classes.headBar}>


            <div className={classes.order}>

                parts order:

            </div>

            <input type="string"
                value={partsString}
                onChange={e => setPartsString(e.target.value)}
                onBlur={e => {
                    const newPartOrder = partsString.split("").map(s => parseFloat(s))
                    MainController.tune.setPartOrder(newPartOrder)
                }}
            />

            <button onClick={e => MainController.tune.randomPartsOrder()}>Random</button>

            {MainController.tune.partOrder.toString().replaceAll(",", "")}

        </div>

        <div className={classes.row}>




            <div className={classes.parts}>

                {MainController.tune.parts.map(part => {

                    return <PartConfig part={part} />

                })}

            </div>

            <div className={classes.tune}>

                {/* <TuneRender tune={MainController.tune} /> */}
                <Sheet></Sheet>

            </div>
        </div>

    </div>

}