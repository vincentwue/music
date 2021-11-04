
import { Interval, intervals, Intervals } from "./intervals";
import { Note, notes } from "./notes";

export enum IntervalDirection {
    Up = "up",
    Down = "down"
}

export class SpecificInterval {

    root
    target
    interval
    direction

    constructor(root: Note, target: Note, direction = IntervalDirection.Up) {

        this.root = root
        this.target = target
        this.direction = direction
        this.interval = SpecificInterval.intervalBetweenNotes(root, target, direction)

    }

    public static intervalBetweenNotes(root: Note, target: Note, direction: IntervalDirection=IntervalDirection.Up) {
        const rootIndex = notes.indexOf(root)
        const targetIndex = notes.indexOf(target)

        let interval;
        if (rootIndex === targetIndex) {
            interval = Intervals.PerfectUnison
        } else {
            if (direction === IntervalDirection.Up) {
                if (targetIndex > rootIndex) {
                    interval = intervals[targetIndex - rootIndex]
                } else {
                    interval = intervals[12 - rootIndex + targetIndex]
                }
            } else {
                if (targetIndex > rootIndex) {
                    interval = intervals[rootIndex + (12 - targetIndex)]
                } else {
                    interval = intervals[rootIndex - targetIndex]
                }
            }
        }
        return interval
    }
    public static calculateInterval(rootNote:Note,interval:Interval) {
        const noteIndex = notes.indexOf(rootNote)
        const calcNotes = [...notes.slice(noteIndex), ...notes.slice(0, noteIndex)]
        return calcNotes[interval.steps]


    }


} 