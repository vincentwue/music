import { Interval, Intervals } from "./intervals"
import { Note } from "./notes"
import { SpecificInterval } from "./specificIntervals"

export class Chord {
    id
    intervals
    standardSymbol

    constructor(
        id: string,
        intervals: Interval[],
        standardSymbol: string,
    ) {
        this.id = id
        this.intervals = intervals
        this.standardSymbol = standardSymbol
    }

    public isPresentInNotes(rootNote:Note, notes:Note[]) {
        // if (notes.length !== this.intervals.length) return

        for (const interval of this.intervals) {
            if (!notes.includes(SpecificInterval.calculateInterval(rootNote, interval))) {
                return false
            }
        }

        return true
    }

}

export class Chords {

    static PerfectUnison = new Chord(
        "unison",
        [Intervals.PerfectUnison],
        "unison"
    )
    static Minor = new Chord("minor",
        [Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.PerfectFifth],
        "_"
    )
    static MinorB5 = new Chord("minorb5",
        [Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.Tritone],
        "_b5"
    )
    static Major = new Chord("major", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth],
        ""
    )
    static Major7 = new Chord("Δ7", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth,
        Intervals.MajorSeventh,
    ],
        "Δ7"
    )
    static Chord7 = new Chord("7", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth,
        Intervals.MinorSeventh,
    ],
        "7"
    )
    static Minor7 = new Chord("_7", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.PerfectFifth,
        Intervals.MinorSeventh,
    ],
        "_7"
    )
    static Minor7b5 = new Chord("_7b5", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.MinorSeventh,
        Intervals.Tritone],
        "_7b5"
    )
    static Chord7b9 = new Chord("7b9", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth,
        Intervals.MinorSeventh,
        Intervals.MinorSecond
    ],
        "7b9"
    )
    static Chord7Sharp5 = new Chord("7#5", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.MinorSixth,
        Intervals.MinorSeventh,
    ],
        "7#5"
    )
    static Chord7Sharp11 = new Chord("7#11", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.Tritone,
        Intervals.PerfectFifth,
        Intervals.MinorSeventh,
    ],
        "7#11"
    )
    static PowerChord = new Chord("5", [
        Intervals.PerfectUnison,
        Intervals.PerfectFifth],
        "5"
    )
    static MajorB13 = new Chord("Δ#5", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.MinorSixth,
        Intervals.MajorSeventh],
        "Δ#5"
    )
    static Dim7 = new Chord("°7", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.Tritone,
        Intervals.MajorSixth],
        "°7"
    )
    static b9b13 = new Chord("#5b9", [
        Intervals.PerfectUnison,
        Intervals.MinorSecond,
        Intervals.MajorThird,
        Intervals.MinorSixth],
        "#5b9"
    )
    static MinorMajor7 = new Chord("_Δ", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.PerfectFifth,
        Intervals.MajorSeventh],
        "_Δ"
    )
    static Minor6 = new Chord("_6", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.PerfectFifth,
        Intervals.MajorSixth],
        "_6"
    )
    static Major6 = new Chord("6", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth,
        Intervals.MajorSixth],
        "6"
    )
    static Minorb6 = new Chord("_b6", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.PerfectFifth,
        Intervals.MinorSixth],
        "_b6"
    )
    static Majorb6 = new Chord("b6", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth,
        Intervals.MinorSixth],
        "b6"
    )
    static Minor9 = new Chord("_9", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.PerfectFifth,
        Intervals.MajorSecond],
        "_9"
    )
    static Major9 = new Chord("9", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth,
        Intervals.MajorSecond],
        "9"
    )
    static Minorb9 = new Chord("_b9", [
        Intervals.PerfectUnison,
        Intervals.MinorThird,
        Intervals.PerfectFifth,
        Intervals.MinorSecond],
        "_b9"
    )
    static Majorb9 = new Chord("b9", [
        Intervals.PerfectUnison,
        Intervals.MajorThird,
        Intervals.PerfectFifth,
        Intervals.MinorSecond],
        "b9"
    )
    static Sus4 = new Chord("7sus4", [
        Intervals.PerfectUnison,
        Intervals.PerfectForth,
        Intervals.PerfectFifth,
        Intervals.MinorSeventh],
        "sus4"
    )
    static NineSus4 = new Chord("79sus4", [
        Intervals.PerfectUnison,
        Intervals.PerfectForth,
        Intervals.PerfectFifth,
        Intervals.MinorSeventh,
        Intervals.MajorSecond],
        "79sus4"
    )
    static Major7b6 = new Chord("7b13", [
        Intervals.PerfectUnison,
        Intervals.PerfectForth,
        Intervals.PerfectFifth,
        Intervals.MinorSeventh,
        Intervals.MinorSixth],
        "7b13"
    )

}

export const chords : Chord[] = Object.values(Chords)