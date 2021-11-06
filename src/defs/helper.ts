import { ConfigValue } from "./configs/settings";
import { Note } from "./notes";

/**
 * random int -> min and max included 
 * @param min 
 * @param max 
 * @returns 
 */
export function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomFromArray(array: any[], not: any[] = []) {
    if (!not) not = []
    const filterArray = array.filter(e => !not.includes(e))
    return filterArray[Math.floor(Math.random() * filterArray.length)];
}

export function getArrayOfSize(n : number) {
   return Array.apply(null, Array(n)).map(function (x, i) { return i; })
}

export function withProbability(value:ConfigValue, equation:boolean=true) {

    const random = randomIntFromInterval(0,100)

    if (value === ConfigValue.None || !equation) return false

    else if (value === ConfigValue.Rare) {
        return random > 80
    }
    else if (value === ConfigValue.Medium) {
        return random > 60
    }
    else if (value === ConfigValue.WellDone) {
        return random > 40
    }
    else if (value === ConfigValue.Insane) {
        return random > 20
    }

}

export function getScaleFromNote(n:Note, notes:Note[]) {
    const noteIndex = notes.indexOf(n)
    const calcNotes = [...notes.slice(noteIndex), ...notes.slice(0, noteIndex)]
    return calcNotes
}