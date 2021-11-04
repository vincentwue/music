import { chords } from "./chords";
import { intervals } from "./intervals";
import { Notes, notes } from "./notes";
import { Scales, scales } from "./scales";
import { specificChords } from "./specificChords";
import { SpecificScale, specificScales } from "./specificScales";
import { Tune } from "./tune";


const exp =  {
    notes,
    intervals,
    chords,
    scales,
    specificChords,
    specificScales,
}


console.log(exp);
console.log(new SpecificScale(Notes.C, Scales.Major).RandomProgression);
(window as any).music = exp

export default exp

console.log(new Tune())