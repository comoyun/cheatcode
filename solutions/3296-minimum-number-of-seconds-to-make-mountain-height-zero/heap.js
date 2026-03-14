// time: O(n log n)
// space: O(n)

class MH {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return top;
    }

    peek() {
        return this.heap[0];
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent][0] <= this.heap[i][0]) break;
            [this.heap[parent], this.heap[i]] = [
                this.heap[i],
                this.heap[parent],
            ];
            i = parent;
        }
    }

    bubbleDown() {
        let i = 0;
        const n = this.heap.length;

        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let smallest = i;

            if (left < n && this.heap[left][0] < this.heap[smallest][0])
                smallest = left;
            if (right < n && this.heap[right][0] < this.heap[smallest][0])
                smallest = right;

            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];
            i = smallest;
        }
    }
}

/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
const minNumberOfSeconds = (mountainHeight, workerTimes) => {
    const heap = new MH();
    let result = 0;

    for (const time of workerTimes) heap.push([time, 2, time]);

    while (mountainHeight) {
        const [total, count, time] = heap.pop();
        mountainHeight--;
        result = Math.max(result, total);
        heap.push([total + time * count, count + 1, time]);
    }

    return result;
};

