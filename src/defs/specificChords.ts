import { Chord, chords } from "./chords";
import { Note, notes } from "./notes";
import { SpecificScale} from "./specificScales";

export class SpecificChord {

    id: string
    name
    chord
    rootNote
    notes
    presentInScales: SpecificScale[] = []
    context?: SpecificScale

    constructor(rootNote: Note, chord: Chord, context?: SpecificScale) {
        this.rootNote = rootNote
        this.chord = chord
        this.name = rootNote.flat + chord.id
        this.id = rootNote.id + chord.id
        if (context) this.id = this.id + " context:" + context?.id

        this.notes = SpecificChord.calculateNotesForChord(rootNote, chord)

        this.context = context
    }

    get step() {
        if (!this.context) return ""
        return this.context.notes.indexOf(this.rootNote)
    }

    get render() {
        if (!this.context) return this.rootNote.flat + this.chord.standardSymbol
        return this.rootNote.render(this.context?.scaleType) + this.chord.standardSymbol 
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

function generateSpecificChords() {
    const result = []


    for (const note of notes) {
        for (const chord of chords) {
            result.push(new SpecificChord(note, chord))
        }
    }

    return result

}