import { withLatestFrom } from "../../node_modules/rxjs/dist/types";
import { randomIntFromInterval, withProbability } from "./helper";
import { ConfigValue, IPartConfig, Part } from "./part";
import { SpecificChord } from "./specificChords";


export class Bar {

    chordsCount
    part
    lastPart
    config
    chords: SpecificChord[]


    constructor(lastPart: Part | null, part: Part, config: IPartConfig/* , useChords:SpecificChord[]=[] */) {

        // useChords = lastPart ? [...lastPart.remainingUsedChords ,...useChords]

        this.chordsCount = randomIntFromInterval(config.MinChordsPerBar, config.MaxChordsPerBar)

        this.lastPart = lastPart
        this.part = part
        this.config = config

        this.chords = []



        while (this.chords.length < this.chordsCount) {

/*             while(useChords.length) {
                if (withProbability())
                if (useChords.length > 0 && this.chords.length < this.chordsCount) {
                    console.error("The useChords where more than allowed!")
                }
            }

 */
            // 251
            if (withProbability(config.JazzyProgressionness, this.chordsCount >= 3)) {
                // major or minor?
                const major = randomIntFromInterval(0,1)
                if (major) {
                    this.chords.push(part.scale.getStepTetrad(2))
                    this.chords.push(part.scale.getStepTetrad(5))
                    this.chords.push(part.scale.getStepTetrad(1))
                } else {
                    this.chords.push(part.scale.getStepTetrad(7))
                    this.chords.push(part.scale.getStepTetrad(3))
                    this.chords.push(part.scale.getStepTetrad(6))
                }

            }

            // random chords
            if (withProbability(ConfigValue.Medium)) {
                this.chords.push(part.scale.RandomTetrad)
            }

        }

    }




}