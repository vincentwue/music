import { Subject } from "rxjs";
import { ISubscribable } from "../components/useRerenderOnSubscribableChange";

function getTimeInterval(bpm: number) {
    return (60 / bpm) * 1000;
}


export class BpmRunner implements ISubscribable {
    private _renderCount = 0
    private _bpm: number = 60
    private _timeInterval: number = getTimeInterval(this._bpm)
    private _runningInterval: NodeJS.Timeout | undefined;
    onChange = new Subject<number>()

    private _beforeNext

    constructor(bpm: number = 60, beforeNext: () => void) {

        this._beforeNext = beforeNext
        this.bpm = bpm
        this._startInterval()
    }

    public resetRenderCount() {
        this._renderCount = 0
    }

    public stop() {
        if (this._runningInterval) {
            clearInterval(this._runningInterval)
        }
    }

    private _rerender() {
        this._renderCount = this._renderCount + 1
        this.onChange.next(this._renderCount)
    }


    public get bpm() {
        return this._bpm
    }

    public getPosition(barsCount: number, chordsPerBar: number) {
        const allPositions = barsCount * chordsPerBar
        const position = this._renderCount % allPositions


        let counter = 0
        while (counter < allPositions) {

            if (counter === position || (counter < position && (counter+chordsPerBar)>position) ) {

                const isLastOne = position === allPositions

                const chordInBar = position - counter
                const result = {
                    bar:counter/chordsPerBar,
                    chordInBar:chordInBar,
                    isLastOne
                }
                return result
            }

            counter = counter + chordsPerBar
        }
        return undefined
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