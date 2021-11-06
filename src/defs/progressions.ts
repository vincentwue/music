import { Chords } from "./chords";
import { randomIntFromInterval, withProbability } from "./helper";
import { IRandomConfig } from "./configs/configs"

import { SpecificChord } from "./specificChords";
import { SpecificScale } from "./specificScales";

export class ChordProgression {

    chords
    chordsCount
    counter_251

    constructor(chords:SpecificChord[], counter_251:number) {
        this.chords = chords
        this.chordsCount = chords.length
        this.counter_251 = counter_251
    }

}

export class ChordProgressionCreator {

    // This function creates the chord progression that is later mapped to bars (BarsCreator)

    // Config is evaluated here.

    // IMPLEMENT CONFIG CONSEQUENCES HERE
    public static createChordProgression(scale: SpecificScale, config: IRandomConfig) {

        const chords = []

        const barsCount = config.HowManyBars.value
        const maxChordsPerBar = config.MaxChordsPerBar.value
        let counter_251 = 0

        // Minimum one 
        const chordsCount = randomIntFromInterval(barsCount /* / 2 */, (maxChordsPerBar * barsCount))

        let last;
        while (chords.length < chordsCount) {

            // 251
            if (withProbability(config.JazzyProgressionness.value, chordsCount >= 3)) {
                // major or minor?
                const major = randomIntFromInterval(0, 1)
                if (major) {
                    chords.push(scale.getStepTetrad(2))
                    chords.push(scale.getStepTetrad(5))
                    chords.push(scale.getStepTetrad(1))
                    last = scale.getStepTetrad(1)
                } else {
                    chords.push(scale.getStepTetrad(7))
                    chords.push(scale.getStepTetrad(3))
                    chords.push(scale.getStepTetrad(6))
                    last = scale.getStepTetrad(6)
                }
                console.log("added 2 5 1 !")
                counter_251 = counter_251 + 1

            }

            // Random single chord
            let newChord = scale.getRandomTetrad(last)

            // UseAlwaysMajorThirdOnStep3
            if (newChord.step === 3 && config.UseAlwaysMajorThirdOnStep3) {
                newChord = new SpecificChord(newChord.rootNote, Chords.Chord7)
            }

            last = newChord

            chords.push(newChord)


        }

        console.log("Random chord progression created", chords)

        return new ChordProgression(chords,  counter_251)
    }





}

