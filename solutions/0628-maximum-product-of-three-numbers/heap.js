// time: O(n)
// space: O(1)

class MyFuckingHeap {
    constructor(comparator = (a, b) => a - b) {
        this.heap = [];
        this.compare = comparator;
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return top;
    }

    length() {
        return this.heap.length;
    }

    _heapifyUp(idx) {
        let parent = Math.floor((idx - 1) / 2);
        while (idx > 0 && this.compare(this.heap[idx], this.heap[parent]) < 0) {
            [this.heap[idx], this.heap[parent]] = [
                this.heap[parent],
                this.heap[idx],
            ];
            idx = parent;
            parent = Math.floor((idx - 1) / 2);
        }
    }

    _heapifyDown(idx) {
        const n = this.heap.length;
        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let best = idx;

            if (left < n && this.compare(this.heap[left], this.heap[best]) < 0)
                best = left;
            if (
                right < n &&
                this.compare(this.heap[right], this.heap[best]) < 0
            )
                best = right;
            if (best === idx) break;

            [this.heap[idx], this.heap[best]] = [
                this.heap[best],
                this.heap[idx],
            ];
            idx = best;
        }
    }
}

const maximumProduct = nums => {
    const maxHeap = new MyFuckingHeap((a, b) => b - a);
    const minHeap = new MyFuckingHeap();

    for (const num of nums) {
        maxHeap.push(num);
        if (maxHeap.length() > 3) maxHeap.pop();

        minHeap.push(num);
        if (minHeap.length() > 3) minHeap.pop();
    }

    const [an, bn, cn] = minHeap.heap;
    const pos = an * bn * cn;

    const [_, bx, cx] = maxHeap.heap;
    let neg = -Infinity;
    if (bx < 0 && Math.max(an, bn, cn) > 0)
        neg = bx * cx * Math.max(an, bn, cn);

    return Math.max(pos, neg);
};
