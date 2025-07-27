// time: O(nm)
// space: O(n)

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
const maxTargetNodes = (edges1, edges2) => {
    const buildAdj = edges => {
        const n = edges.length + 1;
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        return adj;
    };

    const dfs = (node, parent, adj, parity, isEven) => {
        let count = isEven ? 1 : 0;
        parity[node] = isEven;
        for (const neighbor of adj[node]) {
            if (neighbor === parent) continue;
            count += dfs(neighbor, node, adj, parity, !isEven);
        }
        return count;
    };

    const adjA = buildAdj(edges1);
    const adjB = buildAdj(edges2);

    const n1 = adjA.length,
        n2 = adjB.length;

    const parityA = new Array(n1).fill(false);
    const parityB = new Array(n2).fill(false);

    const evenA = dfs(0, -1, adjA, parityA, true);
    const oddA = n1 - evenA;

    const evenB = dfs(0, -1, adjB, parityB, true);
    const oddB = n2 - evenB;

    const result = new Array(n1);
    const maxB = Math.max(evenB, oddB);

    for (let i = 0; i < n1; i++) result[i] = (parityA[i] ? evenA : oddA) + maxB;

    return result;
};
