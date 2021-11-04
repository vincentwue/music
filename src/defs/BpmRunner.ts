import { Subject } from "rxjs";
import { randomIntFromInterval } from "./helper";

function getTimeInterval(bpm: number) {
    return (60 / bpm) * 1000;
}


export class BpmRunner {
    private _renderCount = 0
    private _bpm: number = 60
    private _timeInterval: number = getTimeInterval(this._bpm)
    private _runningInterval: NodeJS.Timeout | undefined;
    private _onNext = new Subject<number>()

    private _beforeNext

    constructor(bpm: number = 60, beforeNext: () => void) {

        this._beforeNext = beforeNext
        this.bpm = bpm
        this._startInterval()
    }

    public stop() {
        if (this._runningInterval) {
            clearInterval(this._runningInterval)
        }
    }

    private _rerender() {
        this._renderCount = this._renderCount + 1
        this._onNext.next(this._renderCount)
    }


    public get bpm() {
        return this._bpm
    }

    public set bpm(bpm: number) {
        this._bpm = bpm
        this._timeInterval = getTimeInterval(bpm)
        this._startInterval()
        this._rerender()

    }

    private _startInterval() {
        if (this._runningInterval) {
            clearInterval(this._runningInterval)
        }

        this._runningInterval = setInterval(() => {
            this._beforeNext()
            this._rerender()

        }, this._timeInterval)
    }

}