// time: O(n^2 log n)
// space: O(n^2)

class MySloppyHeap {
    constructor(dist, n) {
        this.heap = [];
        this.dist = dist;
        this.n = n;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        const heap = this.heap;
        const dist = this.dist;
        const n = this.n;

        let curr = heap.length - 1;
        let parent = Math.floor((curr - 1) / 2);

        while (
            curr > 0 &&
            dist[(heap[curr] / n) | 0][heap[curr] % n] >
                dist[(heap[parent] / n) | 0][heap[parent] % n]
        ) {
            [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
            curr = parent;
            parent = Math.floor((curr - 1) / 2);
        }
    }

    pop() {
        const heap = this.heap;

        if (heap.length <= 1) return heap.pop();

        const rem = heap[0];
        heap[0] = heap.pop();
        this.bobbleDown();
        return rem;
    }

    bobbleDown() {
        const heap = this.heap;
        const dist = this.dist;
        const n = this.n;

        let curr = 0;
        let left = curr * 2 + 1;
        let right = curr * 2 + 2;

        while (left < heap.length) {
            let largest = curr;

            if (
                dist[(heap[largest] / n) | 0][heap[largest] % n] <
                dist[(heap[left] / n) | 0][heap[left] % n]
            )
                largest = left;

            if (
                right < heap.length &&
                dist[(heap[largest] / n) | 0][heap[largest] % n] <
                    dist[(heap[right] / n) | 0][heap[right] % n]
            )
                largest = right;

            if (curr === largest) break;

            [heap[curr], heap[largest]] = [heap[largest], heap[curr]];

            curr = largest;
            left = curr * 2 + 1;
            right = curr * 2 + 2;
        }
    }

    get length() {
        return this.heap.length;
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maximumSafenessFactor = grid => {
    let result = Infinity;
    const n = grid.length;
    const dist = Array.from({ length: n }, () => new Array(n).fill(Infinity));
    const queue = [];
    let head = 0;

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
    ];

    const outOfBounds = (row, col) =>
        row < 0 || col < 0 || row >= n || col >= n;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col]) {
                queue.push(row * n + col);
                dist[row][col] = 0;
            }
        }
    }

    while (head < queue.length) {
        const idx = queue[head++];
        const row = (idx / n) | 0;
        const col = idx % n;
        const d = dist[row][col];

        for (const [dr, dc] of dirs) {
            const nr = row + dr;
            const nc = col + dc;
            const nd = d + 1;

            if (outOfBounds(nr, nc)) continue;
            if (dist[nr][nc] <= nd) continue;

            dist[nr][nc] = nd;
            queue.push(nr * n + nc);
        }
    }

    const heap = new MySloppyHeap(dist, n);
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));

    heap.push(0);
    visited[0][0] = true;

    while (heap.length) {
        const idx = heap.pop();
        const row = (idx / n) | 0;
        const col = idx % n;

        result = Math.min(result, dist[row][col]);

        if (row === n - 1 && col === n - 1) break;

        for (const [dr, dc] of dirs) {
            const nr = row + dr;
            const nc = col + dc;

            if (outOfBounds(nr, nc)) continue;
            if (visited[nr][nc]) continue;

            visited[nr][nc] = true;
            heap.push(nr * n + nc);
        }
    }

    return result;
};

