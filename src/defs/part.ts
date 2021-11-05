

// a part:


import { Bar, BarsCreator } from "./bar"

import { Notes } from "./notes"
import { ChordProgressionCreator } from "./progressions"
import { Scales } from "./scales"

import { SpecificScale } from "./specificScales"

// jazinezz
// rhythm crazinezz
// tetrads/triads/crazy chords
// bars
// max chords per bar
// circle of fifth closeness


export interface IPartConfig {
    JazzyProgressionness: ConfigValue
    RhythmCrzyness: ConfigValue
    ChordComplexity: ConfigValue
    MaxChordsPerBar: number
    MinChordsPerBar: number
    KeyChange: boolean
    CircleOfFifthMaxCloseness: number
    HowManyBars: number
    UseAlwaysMajorThirdOnStep3: ConfigValue
    DoNotUseSteps: number[]
    EmptyBars:ConfigValue
}

export enum ConfigValue {
    None = "none",
    Rare = "rare",
    Medium = "medium",
    WellDone = "well done",
    Insane = "insane"
}



export const standardPartConfig: IPartConfig = {
    JazzyProgressionness: ConfigValue.WellDone,
    RhythmCrzyness: ConfigValue.Rare,
    ChordComplexity: ConfigValue.Medium,
    HowManyBars: 4,
    MaxChordsPerBar: 4,
    MinChordsPerBar: 1,
    KeyChange: true,
    CircleOfFifthMaxCloseness: 2,
    UseAlwaysMajorThirdOnStep3: ConfigValue.None,
    DoNotUseSteps: [],
    EmptyBars:ConfigValue.None


}

// einige settings auf tune ebene heben?
// Was ist wenn eine zwei fünf eins über drei bars geht? oder sogar mehr?


// Keine doppelten keys!

// Gb oder F# auf 50/50 chance stellen

export class Part {

    scale: SpecificScale
    bars: Bar[]
    chordProgression

    // We need the last part to get the new scale (circle of fifth closeness).
    constructor(lastPart: Part | null, config: IPartConfig = standardPartConfig) {

        // Determine the scale of the part.
        // Currently only circle of fifth and regular major keys
        if (!lastPart) {
            this.scale = new SpecificScale(Notes.Random, Scales.Major)
        } else {
            this.scale = lastPart.scale.getCloseCircleOfFifthsScale(config.CircleOfFifthMaxCloseness)
        }

        this.chordProgression = ChordProgressionCreator.createChordProgression(this.scale, config)
        this.bars = BarsCreator.mapChordsToBars(this.chordProgression, config)

        // for (let i = 0; i < config.HowManyBars; i++) {
        //     this.bars.push(new Bar(lastPart, this, config))
        // }


    }


}

