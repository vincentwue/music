
import { Subject } from "rxjs";
import { ISubscribable } from "../components/useRerenderOnSubscribableChange";
import { BarChords } from "./bar";
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


export class Tune implements  ISubscribable {

    onChange = new Subject<any>()

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
            PartIndex.A,
            PartIndex.B,
            PartIndex.C,
        ]
    }

    addPart() {
        const newPart =  new Part(this.parts[this.parts.length-1], this.parts.length)
        this.parts = [...this.parts, newPart]

        // Propagate part change further to tune change
        newPart.onChange.subscribe(this.onChange)
    }

    removePart(part: Part) {
        this.parts = this.parts.filter(p => part !== p)
    }




}