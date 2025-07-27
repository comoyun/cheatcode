// time: O(n^2)
// space: O(n)

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
const largestPathValue = (colors, edges) => {
    const n = colors.length;
    const adj = Array.from({ length: n }, () => []);

    for (const [src, dst] of edges) adj[src].push(dst);

    const visit = new Set();
    const path = new Set();
    const count = Array.from({ length: n }, () => Array(26).fill(0));

    const dfs = node => {
        if (path.has(node)) return Infinity;
        if (visit.has(node)) return 0;

        visit.add(node);
        path.add(node);

        const colorIndex = colors.charCodeAt(node) - 'a'.charCodeAt(0);
        count[node][colorIndex] = 1;

        for (const nei of adj[node]) {
            if (dfs(nei) === Infinity) return Infinity;
            for (let c = 0; c < 26; c++) {
                count[node][c] = Math.max(
                    count[node][c],
                    count[nei][c] + (c === colorIndex ? 1 : 0)
                );
            }
        }

        path.delete(node);
        return Math.max(...count[node]);
    };

    let res = 0;
    for (let i = 0; i < n; i++) {
        const val = dfs(i);
        if (val === Infinity) return -1;
        res = Math.max(res, val);
    }

    return res;
};
