



// INFOO

import { Subject } from "rxjs";
import { ISubscribable } from "../../components/useRerenderOnSubscribableChange";
import { BooleanSetting, ConfigValue, ConfigValueSetting, ISetting, NumberArraySetting, NumberSetting } from "./settings";

// SEE BARSCREATOR AND CHORDPROGRESSIONCREATOR

// The configs that refer to the chord progression itself
// are considered in the ChordProgressionCreator in the progressions.ts

// The configs that refer to the division into bars are considered in the
// BarsCreator in the bars.ts
// end with 6 or 1

// einige settings auf tune ebene heben?
// Was ist wenn eine zwei fünf eins über drei bars geht? oder sogar mehr?


// Keine doppelten keys!

// Gb oder F# auf 50/50 chance stellen

// jazinezz
// rhythm crazinezz
// tetrads/triads/crazy chords
// bars
// max chords per bar
// circle of fifth closeness


export interface IRandomConfig {

    // configs that refer to the chordProgression

    // implemented
    JazzyProgressionness: ConfigValueSetting
    CircleOfFifthMaxCloseness: NumberSetting
    UseAlwaysMajorThirdOnStep3: BooleanSetting

    // not implemented
    ChordComplexity: ConfigValueSetting
    KeyChange: BooleanSetting
    DoNotUseSteps: NumberArraySetting
    EndWith6Or1: BooleanSetting


    // configs that refer to the distribution into bars

    // implemented
    MaxChordsPerBar: NumberSetting
    MinChordsPerBar: NumberSetting
    HowManyBars: NumberSetting
    AlwaysHaveChordOnFirstQuarter: BooleanSetting

    //not implemented
    RhythmCrzyness: ConfigValueSetting
    EmptyBars: ConfigValueSetting


}


type SettingEntry = [string, ISetting]

export enum SettingName {
    JazzyProgressionness = "JazzyProgressionness",
    CircleOfFifthMaxCloseness ="CircleOfFifthMaxCloseness",
    UseAlwaysMajorThirdOnStep3="UseAlwaysMajorThirdOnStep3",

    ChordComplexity="",
    KeyChange="KeyChange",
    DoNotUseSteps="DoNotUseSteps",
    EndWith6Or1="EndWith6Or1",

    MaxChordsPerBar="MaxChordsPerBar",
    MinChordsPerBar="MinChordsPerBar",
    HowManyBars="HowManyBars",
    AlwaysHaveChordOnFirstQuarter="AlwaysHaveChordOnFirstQuarter",

    RhythmCrzyness="RhythmCrzyness",
    EmptyBars="EmptyBars",
    
}

export class RandomConfig implements IRandomConfig {

        // configs that refer to the chordProgression

    // implemented
    JazzyProgressionness= new ConfigValueSetting( ConfigValue.Medium, SettingName.JazzyProgressionness)
    CircleOfFifthMaxCloseness= new NumberSetting(3, 1, 6,SettingName.CircleOfFifthMaxCloseness)
    UseAlwaysMajorThirdOnStep3= new BooleanSetting(true, SettingName.JazzyProgressionness)

    // not implemented
    ChordComplexity= new ConfigValueSetting(ConfigValue.Medium, SettingName.ChordComplexity)
    KeyChange= new BooleanSetting(true, SettingName.KeyChange)
    DoNotUseSteps= new NumberArraySetting([], SettingName.DoNotUseSteps)
    EndWith6Or1= new BooleanSetting(true, SettingName.EndWith6Or1)


    // configs that refer to the distribution into bars

    // implemented
    MaxChordsPerBar= new NumberSetting(2, 1, 8,  SettingName.MaxChordsPerBar)
    MinChordsPerBar= new NumberSetting(1, 0, 4, SettingName.MinChordsPerBar)
    HowManyBars= new NumberSetting(4, 1, 20, SettingName.HowManyBars)
    AlwaysHaveChordOnFirstQuarter= new BooleanSetting(true, SettingName.AlwaysHaveChordOnFirstQuarter)

    //not implemented
    RhythmCrzyness= new ConfigValueSetting(ConfigValue.Medium, SettingName.RhythmCrzyness)
    EmptyBars= new ConfigValueSetting(ConfigValue.None, SettingName.EmptyBars)

    get entries() : SettingEntry[] {
        return Object.entries(this)
    }

}


export class SubscribableRandomConfig implements ISubscribable {

    config = new RandomConfig()
    onChange = new Subject()


    constructor() {

        for (const [, setting] of this.config.entries) {
            
            setting.onSettingChanged.subscribe(()=> {
                console.log("config changed", setting)
                this.onChange.next(null)
            })

        }

    }


}