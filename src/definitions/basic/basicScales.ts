import { IRawScale } from "../raw/rawScales";
import { IBasicChord } from "./basicChords";
import { IBasicNote } from "./basicNotes";


export interface IBasicScale {

    rawScale:IRawScale

    notes:IBasicNote[]

    chords:IBasicChord[][]

    triads:IBasicChord[]

    tetrads:IBasicChord[]

    basicScale:IBasicScale

}