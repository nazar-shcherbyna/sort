import { Sorter } from "./Sorter"

export class CharacterCollection extends Sorter {
    constructor(public data: string) {
        super()
    }

    get length() {
        return this.data.length
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase() 
    }

    swap(leftIdx: number, rightIdx: number): void {
        const characrers = this.data.split('')
        const temp = characrers[leftIdx]
        characrers[leftIdx] = characrers[rightIdx]
        characrers[rightIdx] = temp
        this.data = characrers.join('')
    }
}