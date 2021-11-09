import { Chord } from "./chords";
import { Note, notes } from "./notes";
import { Scales } from "./scales";
import { generateSpecificScales, SpecificScale, SpecificScales } from "./specificScales";

let specificScales: SpecificScale[] | undefined

export class SpecificChord {

    id: string
    name
    chord
    rootNote
    notes
    context?: SpecificScale

    specialContext?

    constructor(rootNote: Note, chord: Chord, context?: SpecificScale, specialContext?: string) {
        this.rootNote = rootNote
        this.chord = chord
        this.name = rootNote.flat + chord.id
        this.id = rootNote.id + chord.id
        if (context) this.id = this.id + " context:" + context?.id

        this.notes = SpecificChord.calculateNotesForChord(rootNote, chord)

        this.context = context
        this.specialContext = specialContext
    }

    get step() {
        if (!this.context) return ""
        return this.context.notes.indexOf(this.rootNote) + 1
    }

    get render() {
        if (!this.context) return this.rootNote.flat + this.chord.standardSymbol
        return this.rootNote.render(this.context?.scaleType) + this.chord.standardSymbol
    }

    get presentInScales() {
        let presentIn = []
        if (!specificScales) specificScales = generateSpecificScales()/* .filter(scale => scale.scale !== Scales.Chromatic) */
        for (const scale of specificScales) {
            if (this.notes.every(note => scale.notes.includes(note))) {
                presentIn.push(scale)
            }
        }
        return presentIn
    }

    get presentInScalesAsString() {
        return this.presentInScales.map(scale => {

            const mode = this.withContext(scale).step
            const modeString = mode === "" ? "" : scale.scale.modes ?  scale.scale.modes[mode] : ""

            const modeStringWithRoot = this.withContext(scale).render + " " + modeString

            const s = scale.name +
                " - step: " +
                this.withContext(scale).step +
                "  mode:  "+
                modeStringWithRoot

            return s

        }).join("\n")
    }



    private static calculateNotesForChord(rootNote: Note, chord: Chord) {
        const noteIndex = notes.indexOf(rootNote)
        const calcNotes = [...notes.slice(noteIndex), ...notes.slice(0, noteIndex)]
        return chord.intervals.map(interval => calcNotes[interval.steps])
    }

    public withContext(context: SpecificScale) {
        return new SpecificChord(this.rootNote, this.chord, context)
    }



}

// export const specificChords: SpecificChord[] = generateSpecificChords()

// function generateSpecificChords() {
//     const result = []


//     for (const note of notes) {
//         for (const chord of chords) {
//             result.push(new SpecificChord(note, chord))
//         }
//     }

//     return result

// }