import { IRawInterval, rawIntervals } from "./intervals"

export interface IRawNotes {
    C:IRawNote,
    Db:IRawNote,
    D:IRawNote,
    Eb:IRawNote,
    E:IRawNote,
    F:IRawNote,
    Gb:IRawNote,
    G:IRawNote,
    Ab:IRawNote,
    A:IRawNote,
    Bb:IRawNote,
    B:IRawNote,
}

export interface IRawNote {
    readonly id: string,
    readonly intervalFromC: IRawInterval,
    readonly standardColor: string,
}

export const rawNotes : IRawNotes = {
    C:{
        id:"C",
        intervalFromC:rawIntervals.PerfectUnison,
        standardColor:"#ffffff",
    },
    Db:{
        id:"Db",
        intervalFromC:rawIntervals.MinorSecond,
        standardColor:"#FF0000",
    },
    D:{
        id:"D",
        intervalFromC:rawIntervals.MajorSecond,
        standardColor:"#800000",
    },
    Eb:{
        id:"Eb",
        intervalFromC:rawIntervals.MinorThird,
        standardColor:"#FFFF00",
    },
    E:{
        id:"E",
        intervalFromC:rawIntervals.MajorThird,
        standardColor:"#808000",
    },
    F:{
        id:"F",
        intervalFromC:rawIntervals.PerfectForth,
        standardColor:"#00FF00",
    },
    Gb:{
        id:"Gb",
        intervalFromC:rawIntervals.Tritone,
        standardColor:"#008000",
    },
    G:{
        id:"G",
        intervalFromC:rawIntervals.PerfectFifth,
        standardColor:"#00FFFF",
    },
    Ab:{
        id:"Ab",
        intervalFromC:rawIntervals.MinorSixth,
        standardColor:"#008080",
    },
    A:{
        id:"A",
        intervalFromC:rawIntervals.MajorSixth,
        standardColor:"#0000FF",
    },
    Bb:{
        id:"Bb",
        intervalFromC:rawIntervals.MinorSeventh,
        standardColor:"#000080",
    },
    B:{
        id:"B",
        intervalFromC:rawIntervals.MajorSeventh,
        standardColor:"#FF00FF",
    },
}

export const rawNotesArray : IRawNote[] = Object.values(rawNotes)