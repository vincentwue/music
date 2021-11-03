


export interface IRawIntervals {
    PerfectUnison: IRawInterval,
    MinorSecond: IRawInterval,
    MajorSecond: IRawInterval,
    MinorThird: IRawInterval,
    MajorThird: IRawInterval,
    PerfectForth: IRawInterval,
    Tritone: IRawInterval,
    PerfectFifth: IRawInterval,
    MinorSixth: IRawInterval,
    MajorSixth: IRawInterval,
    MinorSeventh: IRawInterval,
    MajorSeventh: IRawInterval,
}

export interface IRawInterval {
    readonly id: string,
    // readonly octaveName:string,
    readonly step: number,
    readonly standardSymbol: string,
    // readonly octaveSymbol: string,
    readonly standardColor: string,
}

// https://en.wikipedia.org/wiki/Interval_(music)#cite_ref-TritoneA4_6-0:~:text=below.-,Number%20of,Interval

export const rawIntervals: IRawIntervals = {

    PerfectUnison: {
        id: "unison",
        step: 0,
        standardSymbol: "root",
        standardColor: "#000000"
    },

    MinorSecond: {
        id: "minorSecond",
        step: 1,
        standardSymbol: "b9",
        standardColor: "#9e006f"
    },

    MajorSecond: {
        id: "majorSecond",
        step: 2,
        standardSymbol: "9",
        standardColor: "#ff00b3"
    },

    MinorThird: {
        id: "minorThird",
        step: 3,
        standardSymbol: "b3",
        standardColor: "#b7ff42"
    },

    MajorThird: {
        id: "majorThird",
        step: 4,
        standardSymbol: "3",
        standardColor: "#7dc900"
    },
    PerfectForth: {
        id: "perfectForth",
        step: 5,
        standardSymbol: "11",
        standardColor: "#f7e886"
    },
    Tritone: {
        id: "tritone",
        step: 6,
        standardSymbol: "b5",
        standardColor: "#ad6500"
    },
    PerfectFifth: {
        id: "perfectFifth",
        step: 7,
        standardSymbol: "5",
        standardColor: "#ffdd00"
    },


    MinorSixth: {
        id: "minorSixth",
        step: 8,
        standardSymbol: "b13",
        standardColor: "#ff0019"
    },
    MajorSixth: {
        id: "majorSixth",
        step: 9,
        standardSymbol: "13",
        standardColor: "#d42c3d"
    },
    MinorSeventh: {
        id: "minorSeventh",
        step: 10,
        standardSymbol: "7",
        standardColor: "#0073ff"
    },
    MajorSeventh: {
        id: "majorSeventh",
        step: 11,
        standardSymbol: "Δ",
        standardColor: "#00eaff"
    },

}

export const intervalsArray: IRawInterval[] = Object.values(rawIntervals)