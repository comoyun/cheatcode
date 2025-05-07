/*
 * @title: Graph
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
const minTimeToReach = moveTime => {
    const queue = [[0, 0, 0]],
        directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ],
        height = moveTime.length,
        width = moveTime[0].length;

    const visits = Array.from({ length: height }, () => Array(width).fill(0));
    let result = Infinity;

    while (queue.length) {
        const [r, c, t] = queue.shift();
        /* WARNING: Fails on LeetCode */
        if (++visits[r][c] > 500) continue;
        if (r === height - 1 && c === width - 1) {
            result = Math.min(t, result);
            continue;
        }
        for (const [dr, dc] of directions) {
            const nr = r + dr,
                nc = c + dc;
            if (nr < 0 || nr >= height || nc < 0 || nc >= width) continue;
            const nt = Math.max(t, moveTime[nr][nc]) + 1;
            queue.push([nr, nc, nt]);
        }
    }

    return result === Infinity ? -1 : result;
};
