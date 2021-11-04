import { Tune } from "../../defs/tune";


import classes from "./ShowRandomTune.module.css"


export default function ShowRandomTune() {

    const tune = new Tune()
    console.log(tune)

    return <div className={classes.container}>
    
        {tune.progression.map((bar,i) => {
            return <div className={classes.bar} key={i}>
            
                {bar.map((chord,i) => {
                    return <div className={classes.chord} key={i}>
                    
                        <div className={classes.context}>
                        
                            {chord?.context?.rootNote.render(chord.context.scaleType)}
                            --{chord?.step}
                        </div>

                        <div className={classes.symbol}>
                        
                        {chord?.render    }
                        
                        
                        </div>
                    
                    </div>
                })}
            
            </div>
        })}
    
    </div>


}