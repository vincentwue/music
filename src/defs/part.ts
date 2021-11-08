

// a part:


import { Subject } from "rxjs"
import { ISubscribable } from "../components/useRerenderOnSubscribableChange"
import { Bar, BarsCreator } from "./bar"
import { IRandomConfig, SubscribableRandomConfig } from "./configs/configs"

import { Notes } from "./notes"
import { ChordProgressionCreator } from "./progressions"
import { Scales } from "./scales"

import { SpecificScale } from "./specificScales"



export class Part implements ISubscribable {

    scale: SpecificScale
    bars: Bar[]
    chordProgression
    onChange = new Subject()
    index: number
    lastPart

    subscribableConfig = new SubscribableRandomConfig()

    // We need the last part to get the new scale (circle of fifth closeness).
    constructor(lastPart: Part | null, index: number) {

        this.index = index
        this.lastPart = lastPart
        // Here we say: When a config changes, redo the whole create tune procedure!
        // The same rerender structure ist used for the userInputs And 
        this.subscribableConfig.onChange.subscribe(() => {
            this.init()

            // The part can be subscribed by the rendering.
            this.onChange.next(this)
        })

        // Change if last part changed and DEPENDENCYS
        if (lastPart) {
            lastPart.onChange.subscribe(() => {
                this.init()

                this.onChange.next(null)
            })
        }

        // initiate with random, we run init() anyways
        const config = this.subscribableConfig.config
        this.scale = new SpecificScale(Notes.Random, Scales.Major)
        this.chordProgression = ChordProgressionCreator.createChordProgression(this, config)
        this.bars = BarsCreator.mapChordsToBars(this.chordProgression, config)

        this.init()


        // for (let i = 0; i < config.HowManyBars; i++) {
        //     this.bars.push(new Bar(lastPart, this, config))
        // }


    }

    init() {
        const config = this.subscribableConfig.config

        const lastPart = this.lastPart
        // Determine the scale of the part.
        // Currently only circle of fifth and regular major keys
        if (lastPart && config.KeyChange.value === false) {
            this.scale = lastPart.scale
        } else if (!lastPart) {
            this.scale = new SpecificScale(Notes.Random, Scales.Major)
        } else {
            this.scale = lastPart.scale.getCloseCircleOfFifthsScale(config.CircleOfFifthMaxCloseness.value)
        }

        this.chordProgression = ChordProgressionCreator.createChordProgression(this, config)
        this.bars = BarsCreator.mapChordsToBars(this.chordProgression, config)
        this.onChange.next(0)

    }


}

