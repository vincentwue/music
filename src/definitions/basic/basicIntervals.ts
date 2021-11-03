import { IRawInterval } from "../raw/rawIntervals";
import { IBasicNote } from "./basicNotes";


export interface IBasicInterval {

    rawInterval:IRawInterval

    upTo: (a: IBasicNote, b: IBasicNote) => IBasicInterval
    downTo: (a: IBasicNote, b: IBasicNote) => IBasicInterval
}

