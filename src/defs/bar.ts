
import { randomIntFromInterval } from "./helper";
import { IPartConfig, Part } from "./part";
import { ChordProgression } from "./progressions";
import { SpecificChord } from "./specificChords";


export class BarsCreator {

    public static mapChordsToBars(chordProgression: ChordProgression, config: IPartConfig) {

        const bars: Bar[] = []

        const barsCount = config.HowManyBars


        //TODO implement

        const chordGroups: SpecificChord[][] = []

        for (let i = 0; i < barsCount - 1; i++) {
            chordGroups.push([])
        }

        const chords = chordProgression.chords.slice()

        let currentGroupIndex = 0
        while (chords.length) {
            const currentGroup = chordGroups[currentGroupIndex]

            const nextChord = chords.shift()
            //TODO implement

            if (!nextChord) break;

            if (

            ) {
                currentGroup.push(nextChord)
            }

            
        }

        // let delimiterIndexes: number[] = []

        // let last;
        // for (let i = 0; i < barsCount - 1; i++) {
        //     delimiterIndexes.push(randomIntFromInterval(0, chordProgression.chordsCount))
        // }

        // delimiterIndexes = delimiterIndexes.sort((a, b) => a < b ? -1 : 1)
        // delimiterIndexes.push(chordProgression.chordsCount)
        // console.log("delimiters", delimiterIndexes)

        // let lastDelimiter = 0;
        // for (let i = 0; i < delimiterIndexes.length; i++) {
        //     const delimeter = delimiterIndexes[i]
        //     const slicedChords = chordProgression.chords.slice(lastDelimiter, delimeter)
        //     lastDelimiter = delimeter


        //     const filledChords = BarsCreator.fillChordsWithNull(slicedChords, config.MaxChordsPerBar)

        //     bars.push(new Bar(filledChords, config))
        // }

        console.log("BARS", bars)

        return bars
    }

    private static fillChordsWithNull(chords: SpecificChord[], chordsPerBar: number) {

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

export type BarChords = (SpecificChord | null)[]

export class Bar {

    chords: BarChords


    constructor(chords: BarChords, config: IPartConfig) {



        this.chords = chords

    }

}

