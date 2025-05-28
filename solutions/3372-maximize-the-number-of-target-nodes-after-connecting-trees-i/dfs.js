/*
 * @title: DFS
 * @time: O(n^2 + m^2)
 * @space: O(n + m)
 */

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
const maxTargetNodes = (edges1, edges2, k) => {
    const buildAdj = edges => {
        const n = edges.length + 1;
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        return adj;
    };

    const dfsCount = (node, parent, depth, maxDepth, adj) => {
        if (depth > maxDepth) return 0;
        let total = 1;
        for (const nei of adj[node]) {
            if (nei === parent) continue;
            total += dfsCount(nei, node, depth + 1, maxDepth, adj);
        }
        return total;
    };

    const adjA = buildAdj(edges1),
        adjB = buildAdj(edges2);

    const maxA = adjA.map((_, i) => dfsCount(i, -1, 0, k, adjA)),
        maxB = adjB.map((_, i) => dfsCount(i, -1, 0, k - 1, adjB));
    const globalMaxB = Math.max(...maxB);

    return maxA.map(a => a + globalMaxB);
};
