
import { chords, Chords } from "./chords"
import { getScaleFromNote, randomFromArray, randomIntFromInterval } from "./helper"
import { Interval, Intervals } from "./intervals"
import { Note, notes, Notes } from "./notes"
import { Scale, scales, Scales } from "./scales"
import { SpecificChord } from "./specificChords"
import { SpecificInterval } from "./specificIntervals"


export class SpecificScales {

    get Random() {
        return new SpecificScale(Notes.Random, Scales.Major)
    }

}

export class SpecificScale {

    rootNote
    scale
    mode

    notes
    // chords?

    name
    id
    scaleType

    // triads
    tetrads
    // basicScale

    get rootNoteName() {
        return this.rootNote.render(this.scaleType)
    }

    constructor(
        rootNote: Note = Notes.Random,
        scale: Scale = Scales.Major,
        mode = 0) {

        this.scale = scale
        this.rootNote = rootNote
        this.mode = mode
        this.id = rootNote.id + " " + scale.id + " mode: " + mode
        this.name = rootNote.id + " " + (!scale.modes ? scale.id : scale.modes[mode])

        this.scaleType = Notes.scaleType(rootNote)

        // this.notes = calculateScaleNotes(rootNote, scale, mode)
        this.notes = this.calculateScaleNotes(rootNote, scale, mode)

        this.tetrads = this.addTetrads(this.notes)

        if (mode && scale.modes === null) {
            console.error("Mode not present in scale", { rootNote, scale, mode })
            return
        }

    }

    private calculateScaleNotes(rootNote: Note, scale: Scale, mode: number) {


        const calcNotes = getScaleFromNote(rootNote, notes)

        return scale.intervals.map(interval => {
            // if (interval === undefined) {
            //     console.log(scale, interval)
            //     debugger
            // }
            return calcNotes[interval.steps]
        })

    }

    private addTetrads(scaleNotes: Note[]) {

        const tetrads = [
            Chords.Major7,
            Chords.Chord7,
            Chords.Minor7,
            Chords.Minor7b5
        ]

        const res = []
        for (const note of scaleNotes) {
            // const chords = specificChords

            //     // Alle Vierklänge herausfinden
            //     .filter(chord => chord.rootNote === note)
            //     .filter(chord => tetrads.includes(chord.chord))
            //     .filter(chord => chord.notes.every(note => scaleNotes.includes(note)))

            // Get tetrad notes
            const chordIntervals = getScaleFromNote(note, scaleNotes).filter((note, i) => i === 0 || i === 2 || i === 4 || i === 6)
            // filter to intervals
            .map(chordNote => SpecificInterval.intervalBetweenNotes(note, chordNote))

            let foundChord;
            for (const chord of chords) {
                if (chordIntervals.every(interval => chord.intervals.includes(interval))) {
                    foundChord = chord
                    break;
                }
            }

            if (foundChord) {
                const specificChord = new SpecificChord(note, foundChord, this)
                res.push(specificChord)
                
            } else {
                console.error("Tetrad not found", {this:this, note, scaleNotes, chordIntervals})
                
            }

        }
        return res

    }

    get RandomNote() {
        return randomFromArray(this.notes)
    }
    get RandomTetrad() {
        return randomFromArray(this.tetrads)
    }

    getRandomTetrad(not?:SpecificChord) : SpecificChord {
        return randomFromArray(this.tetrads, [not])

    }

    get FifthJump() {
        const newRoot = SpecificInterval.calculateInterval(this.rootNote, Intervals.PerfectFifth)
        return new SpecificScale(newRoot, this.scale)
    }
    get FourthJump() {
        const newRoot = SpecificInterval.calculateInterval(this.rootNote, Intervals.PerfectForth)
        return new SpecificScale(newRoot, this.scale)
    }

    getStepTetrad(step: number) {
        if (step > 7 || step < 0) {
            console.error("Warning, cant geht this step tetrad", { step, scale: this })
            return this.tetrads[0]
        }
        return this.tetrads[step - 1]
    }

    getCloseCircleOfFifthsScale(maxCloseness: number) {

        const n = randomIntFromInterval(1, maxCloseness)

        // jump fifths or fourths
        const jumpFifhts = randomIntFromInterval(0, 100) < 50

        let result = this as SpecificScale

        for (let i = 0; i < n; i++) {
            result = jumpFifhts ? result.FifthJump : result.FourthJump
        }

        return result
    }

    get RandomProgression() {
        const bars = 4 //randomIntFromInterval(2, 6)
        const maxPerBar = 2

        const progression = []

        let last
        for (let i = 0; i < bars; i++) {

            const bar: SpecificChord | null[] = []
            progression.push(bar)

            for (let j = 0; j < maxPerBar; j++) {

                const randomNess = randomIntFromInterval(0, 100)
                if (randomNess < 50 && j !== 0) {
                    bar.push(null)
                } else {
                    const next = randomFromArray(this.tetrads, [last])
                    bar.push(next)
                    last = next
                }

            }
        }

        return progression


    }

}
// export const specificScales = generateSpecificScales()


function generateSpecificScales() {
    const result = []


    for (const note of notes) {
        for (const scale of scales) {
            result.push(new SpecificScale(note, scale))
        }
    }

    return result

}