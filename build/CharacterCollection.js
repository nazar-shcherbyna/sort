"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    swap(leftIdx, rightIdx) {
        const characrers = this.data.split('');
        const temp = characrers[leftIdx];
        characrers[leftIdx] = characrers[rightIdx];
        characrers[rightIdx] = temp;
        this.data = characrers.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
