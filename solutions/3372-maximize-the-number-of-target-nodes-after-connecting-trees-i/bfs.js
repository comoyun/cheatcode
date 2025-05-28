/*
 * @title: BFS
 * @time: O(n^2)
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

    const bfs = (node, adj, k) => {
        const queue = [[node, node, 0]];
        let count = 0;
        while (queue.length) {
            const [cur, parent, dist] = queue.shift();
            if (dist > k) continue;
            count++;
            for (const nei of adj[cur]) {
                if (nei === parent) continue;
                queue.push([nei, cur, dist + 1]);
            }
        }
        return count;
    };

    const adjA = buildAdj(edges1),
        adjB = buildAdj(edges2);

    const maxA = adjA.map((_, i) => bfs(i, adjA, k)),
        maxB = adjB.map((_, i) => bfs(i, adjB, k - 1));
    const globalMaxB = Math.max(...maxB);

    return maxA.map(a => a + globalMaxB);
};
