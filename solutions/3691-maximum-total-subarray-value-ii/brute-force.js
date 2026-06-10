// time: O(n^3)
// space: O(k)

class Heap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1;
        let parent = idx >> 1;

        while (idx > 0 && this.heap[parent] > this.heap[idx]) {
            [this.heap[idx], this.heap[parent]] = [
                this.heap[parent],
                this.heap[idx],
            ];
            idx = parent;
            parent = idx >> 1;
        }
    }

    pop() {
        if (this.heap.length <= 1) return this.heap.pop();
        const rem = this.heap[0];
        this.heap[0] = this.heap.pop();
        let curr = 0;

        const n = this.heap.length;

        while (true) {
            let left = curr * 2 + 1;
            let right = curr * 2 + 2;
            let chosen = curr;

            if (left < n && this.heap[chosen] > this.heap[left]) chosen = left;
            if (right < n && this.heap[chosen] > this.heap[right])
                chosen = right;

            if (chosen === curr) break;

            [this.heap[chosen], this.heap[curr]] = [
                this.heap[curr],
                this.heap[chosen],
            ];
            curr = chosen;
        }

        return rem;
    }

    get length() {
        return this.heap.length;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxTotalValue = (nums, K) => {
    const n = nums.length;
    const heap = new Heap();
    let result = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= n - i; j++) {
            let min = Infinity;
            let max = -Infinity;
            for (let k = j; k < j + i; k++) {
                min = Math.min(min, nums[k]);
                max = Math.max(max, nums[k]);
            }
            heap.push(max - min);
            if (heap.length > K) heap.pop();
        }
    }

    while (heap.length) result += heap.pop();
    return result;
};

