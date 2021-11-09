import { Bar } from "../../defs/bar"
import { BpmRunner } from "../../defs/BpmRunner"
import MainController from "../../defs/mainController"
import { useRerenderOnSubscribableChange } from "../useRerenderOnSubscribableChange"
import classes from "./Sheet.module.css"

let runner = new BpmRunner(40, ()=>{
    // console.log("rerender runner")
})
runner.stop()
export default function Sheet() {

    useRerenderOnSubscribableChange(MainController.tune)

    const tune = MainController.tune

    useRerenderOnSubscribableChange(runner)

    
    const bars :Bar[] = tune.partsInOrder.map(part => {
        return part.bars
    }).reduce((prev, next) => prev.concat(next))
    
    const position =  runner.getPosition(bars.length, tune.parts[0].subscribableConfig.config.MaxChordsPerBar.value)
    
    console.log(position)
    // if (position?.isLastOne) {
    //     tune.randomPartsOrder()
    //     runner.resetRenderCount()
    // }

    return <div className={classes.container}>

        {/* {(position && position?.bar) + " - "+ (position && position?.chordInBar)} */}
    
        {bars.map((bar, i) => {


            
            return <div className={classes.bar}>
        
                {bar.chords.map((chord, j) => {
                    
                    const presentIn = chord?.presentInScalesAsString
                    const isCurrentPosition = position && position.bar === i && position.chordInBar === j
                    
                    return <div className={classes.chord} title={presentIn}>
                        

                        {chord?.render}
                    
                        <div className={classes.currentPosition}
                            style={{
                                display:isCurrentPosition ? "" : "none"
                            }}
                        />

                    </div>
                })}
            
            </div>
        })}
    

    </div>

}