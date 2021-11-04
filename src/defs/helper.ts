
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