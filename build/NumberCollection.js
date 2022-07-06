"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumberCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return this.data[left] > this.data[right];
    }
    swap(leftIdx, rightIdx) {
        const temp = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = temp;
    }
}
exports.NumberCollection = NumberCollection;
