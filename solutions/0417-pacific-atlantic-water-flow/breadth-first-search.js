// time: O(m * n * m * n)
// space: O(m * n)

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = heights => {
    const n = heights.length;
    const m = heights[0].length;
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const result = [];
    const memo = new Map();

    const traverse = (row, col) => {
        const queue = [[row, col]];
        const visited = new Set();
        const reachable = [false, false];

        while (queue.length) {
            const [r, c] = queue.shift();
            const curr = heights[r][c];
            const key = `${r},${c}`;

            if (memo.has(key)) {
                const cached = memo.get(key);
                reachable[0] ||= cached[0];
                reachable[1] ||= cached[1];
                continue;
            }

            if (visited.has(key)) continue;
            visited.add(key);

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nc < 0) {
                    reachable[0] = true;
                    continue;
                }
                if (nr >= n || nc >= m) {
                    reachable[1] = true;
                    continue;
                }
                if (heights[nr][nc] > curr) continue;

                queue.push([nr, nc]);
            }
        }

        return reachable;
    };

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            const res = traverse(r, c);
            memo.set(`${r},${c}`, res);
            if (res[0] && res[1]) result.push([r, c]);
        }
    }

    return result;
};

