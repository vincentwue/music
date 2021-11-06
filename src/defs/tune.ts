
import { Part  } from "./part";


// global settings:

// how many parts
// how many key changes
// start key
// bpm
// part repetition / order

export enum PartIndex {
    A,
    B,
    C,
    D,
    E,
    F,
}


export class Tune {

    parts: Part[] = []
    partOrder:PartIndex[]

    get partsInOrder() : Part[] {
        return this.partOrder.map(i => {
            return this.parts[i]
        })
    }

    constructor() {
        this.addPart()
        this.addPart()
        this.addPart()
        this.partOrder = [
            PartIndex.A,
            PartIndex.B,
            PartIndex.C,
        ]
    }

    addPart() {
        this.parts = [...this.parts, new Part(this.parts[this.parts.length-1])]
    }

    removePart(part: Part) {
        this.parts = this.parts.filter(p => part !== p)
    }


}