/*
 * @title: Heap
 * @time: O(mn log(mn))
 * @space: O(mn)
 */

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
const minTimeToReach = moveTime => {
    const queue = new Heap(([, , a], [, , b]) => a - b),
        directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ],
        visited = {};
    const ROWS = moveTime.length,
        COLS = moveTime[0].length;
    queue.insert([0, 0, 0]);

    while (queue.size()) {
        const [row, col, time] = queue.remove();
        if (row === ROWS - 1 && col === COLS - 1) return time;

        for (const [dr, dc] of directions) {
            const nr = row + dr,
                nc = col + dc,
                idx = nr * COLS + nc;
            if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || visited[idx])
                continue;

            visited[idx] = true;
            let nt = Math.max(time, moveTime[nr][nc]);
            nt += 2 - ((nr + nc) & 1);
            queue.insert([nr, nc, nt]);
        }
    }

    return -1;
};
