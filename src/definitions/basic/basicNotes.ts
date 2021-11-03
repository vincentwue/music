import { IRawNote } from "../raw/rawNotes";
import { IBasicInterval as IBasicInterval } from "./basicIntervals";


export interface IBasicNote {

    rawNote: IRawNote

    intervalDownTo: (note: IBasicNote) => IBasicInterval
    intervalUpTo: (note: IBasicNote) => IBasicInterval

}