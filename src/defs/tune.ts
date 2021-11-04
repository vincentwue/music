import { SpecificChord } from "./specificChords";
import { SpecificScale } from "./specificScales";

// global settings:

// how many parts
// how many key changes
// start key
// bpm


// a part:

// jazinezz
// rhythm crazinezz
// tetrads/triads/crazy chords
// bars
// max chords per bar
// 


export class Tune {


    progression: (SpecificChord | null)[][]

    constructor() {

        const scale1 = new SpecificScale()
        const progression1 = scale1.RandomProgression

        const scale2 = scale1.NearScaleJump
        const progression2 = scale2.RandomProgression

        const scale3 = scale2.NearScaleJump
        const progression3 = scale3.RandomProgression

        this.progression = [
            ...progression1,
            ...progression2,
            ...progression2,
            ...progression1,
            ...progression1,
            ...progression2,
            ...progression3,
        ]

    }


}