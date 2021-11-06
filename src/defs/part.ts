

// a part:


import { Subject } from "rxjs"
import { ISubscribable } from "../components/useRerenderOnSubscribableChange"
import { Bar, BarsCreator } from "./bar"
import { IRandomConfig,  SubscribableRandomConfig } from "./configs/configs"

import { Notes } from "./notes"
import { ChordProgressionCreator } from "./progressions"
import { Scales } from "./scales"

import { SpecificScale } from "./specificScales"



export class Part implements ISubscribable {

    scale: SpecificScale
    bars: Bar[]
    chordProgression
    onChange = new Subject()


    subscribableConfig = new SubscribableRandomConfig()

    // We need the last part to get the new scale (circle of fifth closeness).
    constructor(lastPart: Part | null) {


        // Here we say: When a config changes, redo the whole create tune procedure!
        // The same rerender structure ist used for the userInputs And 
        this.subscribableConfig.onChange.subscribe(() => {
            init()
            // The part can be subscribed by the rendering.
            this.onChange.next(this)
        })

        const config = this.subscribableConfig.config

        // Determine the scale of the part.
        // Currently only circle of fifth and regular major keys
        if (!lastPart) {
            this.scale = new SpecificScale(Notes.Random, Scales.Major)
        } else {
            this.scale = lastPart.scale.getCloseCircleOfFifthsScale(config.CircleOfFifthMaxCloseness.value)
        }

        this.chordProgression = ChordProgressionCreator.createChordProgression(this.scale, config)
        this.bars = BarsCreator.mapChordsToBars(this.chordProgression, config)


        const init = () => {
            const config = this.subscribableConfig.config

            // Determine the scale of the part.
            // Currently only circle of fifth and regular major keys
            if (!lastPart) {
                this.scale = new SpecificScale(Notes.Random, Scales.Major)
            } else {
                this.scale = lastPart.scale.getCloseCircleOfFifthsScale(config.CircleOfFifthMaxCloseness.value)
            }

            this.chordProgression = ChordProgressionCreator.createChordProgression(this.scale, config)
            this.bars = BarsCreator.mapChordsToBars(this.chordProgression, config)

        }
        init()


        // for (let i = 0; i < config.HowManyBars; i++) {
        //     this.bars.push(new Bar(lastPart, this, config))
        // }


    }


}

