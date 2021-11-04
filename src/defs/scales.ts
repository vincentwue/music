import { randomFromArray } from "./helper"
import { Interval, intervals, Intervals } from "./intervals"



export class Scale {

    id
    name
    steps
    modes

    intervals: Interval[]

    constructor(id: string, steps: number[], modes?: string[]) {

        this.id = id
        this.name = id
        this.steps = steps

        this.modes = modes ?? null

        const stepsMapped  =[]
        
        let tmp = 0
        for (const step of steps) {
            tmp = step+tmp
            if (intervals[tmp]) {
                stepsMapped.push(intervals[tmp])
            }
        }

        this.intervals = [
            Intervals.PerfectUnison,
            ...stepsMapped
        ]
        
    }


}

export class Scales {

    static Major = new Scale("major", [2, 2, 1, 2, 2, 2, 1], [
        "ionisch (dur)",
        "dorisch",
        "phrygisch",
        "lydisch",
        "mixolydisch",
        "aeolisch (moll)",
        "lokrisch",
    ])

    static HarmonicMinor = new Scale("harmonic minor", [2, 1, 2, 2, 1, 3, 1], [
        "harmonic minor mode",
        "Locrian 13 or Locrian 6 (half-diminished)",
        "Ionian #5 (augmented)",
        "Dorian #11 (or dorian #4) (minor)",
        "Phrygian dominant (dominant)",
        "Lydian #2 (major)",
        "Super locrian bb7 (diminished)",
    ])

    static MelodicMinor = new Scale(
        "melodic minor",
        [2, 1, 2, 2, 2, 2, 1],
        [
            "melodic minor mode",
            "dorisch b9",
            "lydisch augmented",
            "lydisch dominant / mixo #11",
            "mixolydisch b13",
            "aeolisch b5 (lokrisch #2)",
            "alterierte skala (super lokrisch)",
        ]
    )

    static Chromatic = new Scale(
        "chromatic",
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    )

    static MinorPentatonic = new Scale(
        "minor pentatonic",
        [3, 2, 2, 3, 2],
    )

    static MajorPentatonic = new Scale(
        "major pentatonic",
        [2, 2, 3, 2, 3],
    )

    static MinorPentatonicBlues = new Scale(
        "minor blues pentatonic",
        [3, 2, 1, 1, 3, 2],
    )

    static MajorPentatonicBlues = new Scale(
        "major blues pentatonic",
        [2, 1, 1, 3, 2, 3],
    )

    static BluesRocknRoll = new Scale(
        "blues rock n roll",
        [2, 1, 1, 1, 1, 1, 2, 1, 2],
    )
    
    static BBKingBlues = new Scale(
        "B.B. King blues",
        [3, 3, 1, 1, 2],
    )

    static get Random() {
        return randomFromArray(scales)
    }

}

export const scales : Scale[] = Object.values(Scales)