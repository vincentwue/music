import MainController from "../../defs/mainController"
import PartConfig from "../PartConfig/PartConfig"
import classes from "./main.module.css"


export default function Main() {

    return <div className={classes.container}>

        <div className={classes.parts}>

            {MainController.tune.parts.map(part => {

                return <PartConfig part={part}/>

            })}

        </div>

    </div>

}