import { Tune } from "../../defs/tune"
import { useRerenderOnSubscribableChange } from "../useRerenderOnSubscribableChange"
import classes from "./Tune.module.css"

interface ITuneProps {
    tune:Tune
}


export default function TuneRender(props:ITuneProps) {

    const tune = props.tune

    useRerenderOnSubscribableChange(tune)

    return <div className={classes.container}>
    
            {tune.partsInOrder.map((part, i) => {
                
                return <div className={classes.part}>
                    
                    part: {part.index} {part.scale.rootNoteName}
                    
                    <div className={classes.bars}>
                    
                        <div className={classes.bar}>
                        
                            {part.bars.map(bar => {
                                return <div className={classes.bar}>

                                    |
                                
                                    <div className={classes.chords}>
                                    
                                        {bar.chords.map(chord => {
                                            return <div className={classes.chord}>
                                            
                                                {chord?.render}
                                            
                                            </div>
                                        })}
                                    
                                    </div>
                                
                                </div>
                            })}
                        
                        </div>
                    
                    </div>
                
                </div>


            })}

    
    </div>

}