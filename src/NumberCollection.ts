import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
    constructor(public data: number[]) {
        super()
    }

    get length(): number {
        return this.data.length
    }

    compare(left: number, right: number): boolean {
        return this.data[left] > this.data[right]
    }

    swap(leftIdx: number, rightIdx: number) {
        const temp = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = temp;
    }
}