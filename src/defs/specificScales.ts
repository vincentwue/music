import { resolveSoa } from "dns"
import { Chords } from "./chords"
import { getArrayOfSize, randomFromArray, randomIntFromInterval } from "./helper"
import { Interval, Intervals } from "./intervals"
import { Note, notes, Notes } from "./notes"
import { Scale, scales, Scales } from "./scales"
import { SpecificChord, specificChords } from "./specificChords"
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
        const noteIndex = notes.indexOf(rootNote)
        const calcNotes = [...notes.slice(noteIndex), ...notes.slice(0, noteIndex)]

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
            const chords = specificChords

                // Alle Vierklänge herausfinden
                .filter(chord => chord.rootNote === note)
                .filter(chord => tetrads.includes(chord.chord))
                .filter(chord => chord.notes.every(note => scaleNotes.includes(note)))

            let chord = chords[0]
            if (chord) chord = chord.withContext(this)

            res.push(chord)

        }
        return res

    }

    get RandomNote() {
        return randomFromArray(this.notes)
    }
    get RandomTetrad() {
        return randomFromArray(this.tetrads)
    }

    get FifthJump() {
        const newRoot = SpecificInterval.calculateInterval(this.rootNote, Intervals.PerfectFifth)
        return new SpecificScale(newRoot, this.scale)
    }
    get FourthJump() {
        const newRoot = SpecificInterval.calculateInterval(this.rootNote, Intervals.PerfectForth)
        return new SpecificScale(newRoot, this.scale)
    }

    get NearScaleJump() {

        const n = randomIntFromInterval(1, 4)
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
export const specificScales = generateSpecificScales()


function generateSpecificScales() {
    const result = []


    for (const note of notes) {
        for (const scale of scales) {
            result.push(new SpecificScale(note, scale))
        }
    }

    return result

}