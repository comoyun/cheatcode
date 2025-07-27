// time: O(n)
// space: O(n)

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
const largestPathValue = (colors, edges) => {
    const n = colors.length;

    const indegree = Array(n).fill(0);

    const graph = Array.from({ length: n }, () => []);

    const dp = Array.from({ length: n }, () => Array(26).fill(0));

    for (const [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }

    const queue = [];

    for (let i = 0; i < n; i++) {
        if (!indegree[i]) queue.push(i);
        dp[i][colors.charCodeAt(i) - 97] = 1;
    }

    let visited = 0;
    let result = 0;

    while (queue.length) {
        const u = queue.shift();
        visited++;

        for (const v of graph[u]) {
            for (let c = 0; c < 26; c++) {
                const curr =
                    dp[u][c] + (c === colors.charCodeAt(v) - 97 ? 1 : 0);
                dp[v][c] = Math.max(dp[v][c], curr);
            }

            if (!--indegree[v]) queue.push(v);
        }

        result = Math.max(result, Math.max(...dp[u]));
    }

    return visited === n ? result : -1;
};
