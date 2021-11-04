import { parseJsonText } from "typescript"
import { TuneRunner } from "../../defs/tune"
import classes from "./ShowRandomTune.module.css"


const tuneRunner = new TuneRunner()


export default function ShowRandomTune() {



    return <div className={classes.container}>

        {tuneRunner.tune.partsInOrder.map((part, i) => {

            return <div className={classes.part} key={i}>

                <div className={classes.partKey}>

                    {part.scale.rootNoteName}

                </div>

                <div className={classes.bars}>

                    {part.bars.map((bar, i) => {
                        return <div className={classes.bar} key={i}>

                            <div className={classes.chords}>

                                {bar.chords.map((chord, i) => {


                                    return <div className={classes.chord} key={i}>

                                        <div className={classes.step}>

                                            {chord.step}

                                        </div>

                                        <div className={classes.chordName}>

                                            {chord.render}


                                        </div>

                                    </div>

                                })}

                            </div>

                        </div>
                    })}

                </div>

            </div>


        })}

    </div>


}