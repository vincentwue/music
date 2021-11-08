
import { Subject } from "rxjs";
import { ISubscribable } from "../components/useRerenderOnSubscribableChange";
import { BarChords } from "./bar";
import { BpmRunner } from "./BpmRunner";
import { randomIntFromInterval } from "./helper";
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
    partOrder:number[]


    get partsInOrder() : Part[] {
        return this.partOrder.map(i => {
            return this.parts[i]
        })
    }

    public rebuildParts() {
        this.parts.forEach(part => part.init())
        this.onChange.next(0)
    }

    public randomPartsOrder(howMany:number=8) {

        const newPartsOrder = []
        for (let i = 0;i<howMany;i++) {
            newPartsOrder.push(randomIntFromInterval(0,2))
        }
        this.partOrder = newPartsOrder
        this.rebuildParts()

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

    public setPartOrder(array:number[]) {
        this.partOrder = array
        this.onChange.next(0)
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