// time: O(Exponential)
// space: O(N)

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const minCost = (n, edges) => {
    // WARNING: This will give TLE
    const adjList = {};
    let result = Infinity;

    for (const [u, v, w] of edges) {
        adjList[u] ??= [];
        adjList[v] ??= [];
        adjList[u].push([v, w]);
        adjList[v].push([u, w * 2]);
    }

    const visited = new Set();
    const dfs = (node, cost) => {
        if (cost >= result) return;

        if (node === n - 1) {
            result = cost;
            return;
        }

        if (visited.has(node)) return;
        visited.add(node);

        for (const [next, w] of adjList[node] || []) dfs(next, cost + w);

        visited.delete(node);
    };

    dfs(0, 0);
    return result;
};

