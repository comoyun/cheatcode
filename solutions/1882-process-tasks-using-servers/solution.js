// time: O((n + m) log n)
// space: O(n + m)

class MyHeap {
    constructor(comparator) {
        this.compare = comparator;
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let idx = this.size - 1;
        let parent = (idx - 1) >> 1;
        while (idx > 0 && this.compare(this.heap[idx], this.heap[parent]) < 0) {
            [this.heap[idx], this.heap[parent]] = [
                this.heap[parent],
                this.heap[idx],
            ];
            idx = parent;
            parent = (idx - 1) >> 1;
        }
    }

    pop() {
        if (this.size < 2) return this.heap.pop();
        const rem = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return rem;
    }

    heapifyDown() {
        let idx = 0;

        while (true) {
            let min = idx;
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;

            if (
                left < this.size &&
                this.compare(this.heap[left], this.heap[min]) < 0
            ) {
                min = left;
            }

            if (
                right < this.size &&
                this.compare(this.heap[right], this.heap[min]) < 0
            ) {
                min = right;
            }

            if (min === idx) break;

            [this.heap[idx], this.heap[min]] = [this.heap[min], this.heap[idx]];

            idx = min;
        }
    }

    get size() {
        return this.heap.length;
    }

    get top() {
        return this.size && this.heap[0];
    }
}
/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
const assignTasks = (servers, tasks) => {
    const n = servers.length;
    const m = tasks.length;

    const heap1 = new MyHeap((a, b) => a[0] - b[0] || a[1] - b[1]);
    const heap2 = new MyHeap(
        (a, b) => a[1] - b[1] || a[0][0] - b[0][0] || a[0][1] - b[0][1]
    );

    for (let i = 0; i < n; i++) heap1.push([servers[i], i]);

    const result = new Array(m).fill(-1);

    for (let i = 0; i < m; i++) {
        while (heap2.size && heap2.top[1] <= i) {
            const [prevServer, prevEnd] = heap2.pop();
            heap1.push(prevServer);
        }

        if (heap1.size) {
            const server = heap1.pop();
            result[i] = server[1];
            heap2.push([server, i + tasks[i]]);
        } else {
            const [prevServer, prevEnd] = heap2.pop();
            result[i] = prevServer[1];
            heap2.push([prevServer, prevEnd + tasks[i]]);
        }
    }

    return result;
};
