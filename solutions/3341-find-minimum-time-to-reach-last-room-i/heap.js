// time: O(n log n)
// space: O(n)

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
const minTimeToReach = moveTime => {
    const queue = new Heap((a, b) => a[2] - b[2]),
        directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ],
        height = moveTime.length,
        width = moveTime[0].length;

    queue.insert([0, 0, 0]);

    const visited = {};

    while (queue.size()) {
        const [r, c, t] = queue.remove();
        if (r === height - 1 && c === width - 1) return t;

        const key = `${r},${c}`;
        if (key in visited) continue;
        visited[key] = true;

        for (const [dr, dc] of directions) {
            const nr = r + dr,
                nc = c + dc;
            if (nr < 0 || nr >= height || nc < 0 || nc >= width) continue;
            const nt = Math.max(t, moveTime[nr][nc]) + 1;
            queue.insert([nr, nc, nt]);
        }
    }

    return -1;
};
