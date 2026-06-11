// time: O(n)
// space: O(n)

/**
 * @param {number[][]} edges
 * @return {number}
 */
const assignEdgeWeights = edges => {
    const adjList = {};
    const MOD = 10 ** 9 + 7;

    for (const [u, v] of edges) {
        adjList[u] ??= [];
        adjList[v] ??= [];

        adjList[u].push(v);
        adjList[v].push(u);
    }

    const visited = new Set();
    const dfs = node => {
        let depth = 0;
        visited.add(node);
        for (const nei of adjList[node]) {
            if (visited.has(nei)) continue;
            depth = Math.max(dfs(nei), depth);
        }
        return 1 + depth;
    };

    const count = dfs(1) - 1;
    let n = 1;
    let k = 1;
    let result = 0;

    for (let i = count; i >= 1; i--) {
        const ord = count - i + 1;
        n *= i;
        k *= ord;

        if (ord & 1) {
            result += n / k;
            result %= MOD;
        }
    }

    return result;
};
