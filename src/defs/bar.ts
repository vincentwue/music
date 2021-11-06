
import { config } from "rxjs";
import { randomIntFromInterval } from "./helper";
import { IRandomConfig } from "./configs/configs"

import { ChordProgression } from "./progressions";
import { SpecificChord } from "./specificChords";


export class BarsCreator {

    // Config is evaluated here.
    // These conditions need to get met to accept
    // how the program divided the chords into bars. 

    
    // IMPLEMENT CONFIG CONSEQUENCES HERE
    private static doesBarChordsFullfillAllConditions(bars: BarChords[], config:IRandomConfig) {

        if (config.AlwaysHaveChordOnFirstQuarter) {
            if (!bars.every(bar => bar[0])) {
                return false
            }
        }

        if (bars.some(bar => bar.length > config.MaxChordsPerBar.value)) {
            return false
        }

        return true
    }

    public static mapChordsToBars(chordProgression: ChordProgression, config: IRandomConfig) {

        for (let i = 0; i < 10000; i++) {

            // Here we add the conditions that the tune should fulfill

            const dividedChords = this.divideChordsToBars(chordProgression, config)
            const barChords = dividedChords.map(bar => this.fillChordsWithNull(bar, config.MaxChordsPerBar.value))


            const fulfilledAllConditions = this.doesBarChordsFullfillAllConditions(barChords, config)

            if (fulfilledAllConditions) {

                // Take this random run
                
                const result =  barChords.map(barChords => new Bar(barChords, config))
                console.log("Found bar division after " + i + " iterations.", result)

                return result

            } else {

                // Generate new and 
                continue;

            }


        }

        console.error("Could not find chords! 10000 iterations too less?", { chordProgression, config })

        return []

    }


    private static divideChordsToBars(chordProgression: ChordProgression, config: IRandomConfig) {

        let copiedChords = chordProgression.chords.slice()
        const bars: SpecificChord[][] = []

        for (let i = 0; i < config.HowManyBars.value; i++) {
            const randomHowMany = randomIntFromInterval(config.MinChordsPerBar.value, config.MaxChordsPerBar.value)
            const newBar = copiedChords.slice(0, randomHowMany)
            bars.push(newBar)
            copiedChords = copiedChords.slice(randomHowMany, copiedChords.length)
        }

        return bars

    }

    private static fillChordsWithNull(chords: SpecificChord[], chordsPerBar: number) : BarChords {

        let res: (SpecificChord | null)[] = chords.slice()

        while (res.length < chordsPerBar) {
            const randomIndex = randomIntFromInterval(0, res.length)
            res = [
                ...res.slice(0, randomIndex),
                null,
                ...res.slice(randomIndex, res.length),
            ]
        }

        return res

    }

}

export type BarChord = SpecificChord | null
export type BarChords = BarChord[]

export class Bar {

    chords: BarChords


    constructor(chords: BarChords, config: IRandomConfig) {



        this.chords = chords

    }

}

