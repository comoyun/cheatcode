/*
 * @title: Heap
 * @time: O(n)
 * @space: O(n)
 */

class SmallestInfiniteSet {
    constructor() {
        this.smallest = 1;
        this.heap = new Heap();
        this.heap.push(this.smallest);
    }

    /**
     * @return {number}
     */
    popSmallest() {
        let popped = this.heap.pop();
        if (!this.heap.length()) this.heap.push(++this.smallest);
        return popped;
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addBack(num) {
        if (this.smallest <= num) return;
        if (this.heap.heap.includes(num)) return;
        this.heap.push(num);
    }
}
