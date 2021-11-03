import { IRawInterval, rawIntervals } from "./rawIntervals"

export interface IRawChords {
    Minor: IRawChord,
    Major: IRawChord,
    Minor7b5: IRawChord,
    Chord7b9: IRawChord,
    PowerChord: IRawChord,
    Major7: IRawChord,
    Chord7Sharp5: IRawChord,
    Chord7Sharp11: IRawChord,
    Minor7: IRawChord,
    Chord7: IRawChord,
    PerfectUnison: IRawChord,


    MajorB13: IRawChord,
    Dim7: IRawChord,
    b9b13: IRawChord,
    MinorMajor7: IRawChord,

    Minor6: IRawChord,
    Minorb6: IRawChord,
    Major6: IRawChord,
    Majorb6: IRawChord,

    Minor9: IRawChord,
    Major9: IRawChord,

    Majorb9: IRawChord,
    Minorb9: IRawChord,



    Sus4: IRawChord,
    NineSus4: IRawChord,
    
    
    Major7b6: IRawChord,
}

export interface IRawChord {
    id: string,
    intervals: IRawInterval[],
    symbol: string,
    triad?: boolean,
    tetrad?: boolean,
}

export const chords: IRawChords = {
    PerfectUnison: {
        id: "unison",
        intervals: [rawIntervals.PerfectUnison],
        symbol: "unison",
    },
    Minor: {
        id: "minor",
        intervals: [rawIntervals.PerfectUnison, rawIntervals.MinorThird, rawIntervals.PerfectFifth],
        symbol: "_",
    },
    Major: {
        id: "major",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth],
        symbol: "",
    },
    Major7: {
        id: "Δ7",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MajorSeventh,
        ],
        symbol: "Δ7",
    },
    Chord7: {
        id: "7",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSeventh,
        ],
        symbol: "7",
    },
    Minor7: {
        id: "_7",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSeventh,
        ],
        symbol: "_7",
    },
    Minor7b5: {
        id: "_7b5",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.MinorSeventh,
            rawIntervals.Tritone],
        symbol: "_7b5",
    },
    Chord7b9: {
        id: "7b9",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSeventh,
            rawIntervals.MinorSecond
        ],
        symbol: "7b9",
    },
    Chord7Sharp5: {
        id: "7#5",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.MinorSixth,
            rawIntervals.MinorSeventh,
        ],
        symbol: "7#5",
    },
    Chord7Sharp11: {
        id: "7#11",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.Tritone,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSeventh,
        ],
        symbol: "7#11",
    },
    PowerChord: {
        id: "5",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.PerfectFifth],
        symbol: "5",
    },
    MajorB13: {
        id: "Δ#5",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.MinorSixth,
            rawIntervals.MajorSeventh],
        symbol: "Δ#5",
    },
    Dim7: {
        id: "°7",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.Tritone,
            rawIntervals.MajorSixth],
        symbol: "°7",
    },
    b9b13: {
        id: "#5b9",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorSecond,
            rawIntervals.MajorThird,
            rawIntervals.MinorSixth],
        symbol: "#5b9",
    },
    MinorMajor7: {
        id: "_Δ",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MajorSeventh],
        symbol: "_Δ",
    },
    Minor6: {
        id: "_6",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MajorSixth],
        symbol: "_6",
    },
    Major6: {
        id: "6",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MajorSixth],
        symbol: "6",
    },
    Minorb6: {
        id: "_b6",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSixth],
        symbol: "_b6",
    },
    Majorb6: {
        id: "b6",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSixth],
        symbol: "b6",
    },
    Minor9: {
        id: "_9",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MajorSecond],
        symbol: "_9",
    },
    Major9: {
        id: "9",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MajorSecond],
        symbol: "9",
    },
    Minorb9: {
        id: "_b9",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MinorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSecond],
        symbol: "_b9",
    },
    Majorb9: {
        id: "b9",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.MajorThird,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSecond],
        symbol: "b9",
    },
    Sus4: {
        id: "7sus4",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.PerfectForth,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSeventh],
        symbol: "sus4",
    },
    NineSus4: {
        id: "79sus4",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.PerfectForth,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSeventh,
            rawIntervals.MajorSecond],
        symbol: "79sus4",
    },
    Major7b6: {
        id: "7b13",
        intervals: [
            rawIntervals.PerfectUnison,
            rawIntervals.PerfectForth,
            rawIntervals.PerfectFifth,
            rawIntervals.MinorSeventh,
            rawIntervals.MinorSixth],
        symbol: "7b13",
    }
}

