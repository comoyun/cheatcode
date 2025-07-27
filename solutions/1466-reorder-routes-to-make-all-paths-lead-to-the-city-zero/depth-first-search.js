// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = (n, connections) => {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of connections) {
        adj[u].push([v, 1]); 
        adj[v].push([u, 0]); 
    }

    let count = 0;
    const visited = new Set();

    const dfs = node => {
        visited.add(node);
        for (const [nei, needsReversal] of adj[node]) {
            if (visited.has(nei)) continue;
            count += needsReversal;
            dfs(nei);
        }
    };

    dfs(0);
    return count;
};
