// time: O(e⋅klog(n⋅k))
// space: O(e⋅klog(n⋅k))

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let curr = this.size() - 1;
        let parent = Math.floor((curr - 1) / 2);

        while (curr > 0 && this.heap[parent][1] > this.heap[curr][1]) {
            [this.heap[curr], this.heap[parent]] = [
                this.heap[parent],
                this.heap[curr],
            ];
            curr = parent;
            parent = Math.floor((curr - 1) / 2);
        }
    }

    pop() {
        if (this.size() < 2) return this.heap.pop();

        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return result;
    }

    heapifyDown() {
        let curr = 0;
        let left = 1;
        let right = 2;

        while (left < this.size()) {
            let min = curr;

            if (this.heap[min][1] > this.heap[left][1]) min = left;
            if (right < this.size() && this.heap[min][1] > this.heap[right][1])
                min = right;

            if (min === curr) break;

            [this.heap[curr], this.heap[min]] = [
                this.heap[min],
                this.heap[curr],
            ];

            curr = min;
            left = curr * 2 + 1;
            right = curr * 2 + 2;
        }
    }

    size() {
        return this.heap.length;
    }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
const shortestPath = (n, edges, labels, k) => {
    const pq = new MinHeap();
    const adjList = Array.from({ length: n }, () => []);
    const dist = Array.from({ length: n }, () => Array(k + 1).fill(Infinity));

    for (const [u, v, w] of edges) adjList[u].push([v, w]);

    dist[0][1] = 0;
    pq.push([0, 0, 1]);

    while (pq.size()) {
        const [node, total, streak] = pq.pop();

        if (total !== dist[node][streak]) continue;
        if (node === n - 1) return total;

        for (const [neighbour, weight] of adjList[node]) {
            const ns = labels[neighbour] === labels[node] ? streak + 1 : 1;

            if (ns > k) continue;

            const nw = total + weight;

            if (nw >= dist[neighbour][ns]) continue;

            dist[neighbour][ns] = nw;
            pq.push([neighbour, nw, ns]);
        }
    }

    return -1;
};
