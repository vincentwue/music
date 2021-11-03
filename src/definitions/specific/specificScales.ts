import { IBasicNote } from "../basic/basicNotes";
import { ISpecificChord } from "./specificChords";


export interface ISpecificScale {


    notes:IBasicNote[]

    chords:ISpecificChord[][]

    triads:ISpecificChord[]

    tetrads:ISpecificChord[]

    basicScale:ISpecificScale

}