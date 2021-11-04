import { idText } from "typescript"
import { Note, notes } from "./notes"
import { IntervalDirection, SpecificInterval } from "./specificIntervals"


export class Interval {
    id
    name
    steps
    standardSymbol

    constructor(
        name:string,
        steps:number,
        standardSymbol:string
    ) {
        this.name = name
        this.id = name
        this.steps = steps
        this.standardSymbol = standardSymbol
    }
}

export class Intervals {
    static PerfectUnison = new Interval("unison", 0, "root")
    static MinorSecond = new Interval("minorSecond", 1, "b9")
    static MajorSecond = new Interval("majorSecond", 2, "9")
    static MinorThird = new Interval("minorThird", 3, "b3")
    static MajorThird = new Interval("majorThird", 4, "3")
    static PerfectForth = new Interval("perfectForth", 5, "11")
    static Tritone = new Interval("tritone", 6, "b5")
    static PerfectFifth = new Interval("perfectFifth", 7, "5")
    static MinorSixth = new Interval("minorSixth", 8, "b13")
    static MajorSixth = new Interval("majorSixth", 9, "13")
    static MinorSeventh = new Interval("minorSeventh", 10, "7")
    static MajorSeventh = new Interval("majorSeventh", 11, "Δ")
}

export const intervals = Object.values(Intervals)

