import { randomIntFromInterval } from "./helper"

export class Note {

    id
    flat
    sharp

    constructor(flat: string, sharp?: string) {
        this.id = flat
        this.flat = flat
        this.sharp = sharp ?? flat
    }

    render(scaleType: ScaleType=ScaleType.Sharp) {
        if (scaleType === ScaleType.Sharp) return this.sharp
        else return this.flat
    }

}

enum ScaleType {
    Flat = "flat",
    Sharp = "sharp"
}

export class Notes {
    static C = new Note("C")
    static Db = new Note("Db", "C#")
    static D = new Note("D")
    static Eb = new Note("Eb", "D#")
    static E = new Note("E")
    static F = new Note("F")
    static Gb = new Note("Gb", "F#")
    static G = new Note("G")
    static Ab = new Note("Ab", "G#")
    static A = new Note("A")
    static Bb = new Note("Bb", "A#")
    static B = new Note("B",)

    public static get Random() {
        return notes[randomIntFromInterval(0, 11)]
    }

    public static scaleType(note: Note) {
        const flatScales = [
            Notes.C,
            Notes.F,
            Notes.Bb,
            Notes.Eb,
            Notes.Ab,
            Notes.Db,
            Notes.Gb,
        ]
        if (flatScales.includes(note)) return ScaleType.Flat
        else return ScaleType.Sharp
    }

}

export const notes: Note[] = Object.values(Notes)
