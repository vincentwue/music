import { Chords } from "./chords";
import { randomIntFromInterval, withProbability } from "./helper";
import { IRandomConfig } from "./configs/configs"

import { SpecificChord } from "./specificChords";
import { SpecificScale } from "./specificScales";
import { Part } from "./part";

export class ChordProgression {

    chords
    chordsCount
    counter_251
    twoFiveOnes
    constructor(chords: SpecificChord[], counter_251: number, twoFiveOnes: SpecificChord[][]) {
        this.chords = chords
        this.chordsCount = chords.length
        this.counter_251 = counter_251
        this.twoFiveOnes = twoFiveOnes
    }

}

export class ChordProgressionCreator {

    // This function creates the chord progression that is later mapped to bars (BarsCreator)

    // Config is evaluated here.

    // IMPLEMENT CONFIG CONSEQUENCES HERE
    public static createChordProgression(part: Part, config: IRandomConfig) {

        const scale = part.scale

        const chords = []
        const twoFiveOnes = []


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
                let twoFiveOne = []
                if (major) {
                    twoFiveOne = [
                        scale.getStepTetrad(2),
                        scale.getStepTetrad(5),
                        scale.getStepTetrad(1)
                    ]
                    last = scale.getStepTetrad(1)
                } else {
                    twoFiveOne = [
                        scale.getStepTetrad(7),
                        scale.getStepTetrad(3),
                        scale.getStepTetrad(6)
                    ]
                    last = scale.getStepTetrad(6)
                }
                chords.push(twoFiveOne[0])
                chords.push(twoFiveOne[1])
                chords.push(twoFiveOne[2])

                console.log("added 2 5 1 !")
                counter_251 = counter_251 + 1
                twoFiveOnes.push(twoFiveOne)

            }

            // Random single chord
            let newChord = scale.getRandomTetrad(last)

            // UseAlwaysMajorThirdOnStep3
            if (newChord.step === 3 && config.UseAlwaysMajorThirdOnStep3.value) {
                newChord = new SpecificChord(newChord.rootNote, Chords.Chord7)
            }

            last = newChord

            chords.push(newChord)


        }

        // chords.forEach(chord => chord.)

        console.log("Random chord progression created", chords)

        return new ChordProgression(chords, counter_251, twoFiveOnes)
    }





}

