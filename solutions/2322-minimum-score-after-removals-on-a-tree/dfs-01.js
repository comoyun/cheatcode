// time: O(n^3)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
const minimumScore = (nums, edges) => {
    /* WARNING: This solution gives TLE */
    const adjList = {};
    let result = Infinity;

    for (const [u, v] of edges) {
        (adjList[u] ??= []).push(v);
        (adjList[v] ??= []).push(u);
    }

    const removeEdge = (u, v) => {
        adjList[u] = adjList[u].filter(n => n !== v);
        adjList[v] = adjList[v].filter(n => n !== u);
    };

    const dfs = (node, parent) => {
        let xor = nums[node];
        for (const neighbor of adjList[node]) {
            if (neighbor === parent) continue;
            xor ^= dfs(neighbor, node);
        }
        return xor;
    };

    for (let i = 0; i < edges.length - 1; i++) {
        const [a1, b1] = edges[i];
        for (let j = i + 1; j < edges.length; j++) {
            const [a2, b2] = edges[j];

            removeEdge(a1, b1);
            removeEdge(a2, b2);

            const comps = new Set([a1, b1, a2, b2]);

            let max = -Infinity;
            let min = Infinity;
            for (const comp of comps) {
                const xor = dfs(comp, -1);
                max = Math.max(max, xor);
                min = Math.min(min, xor);
            }

            result = Math.min(result, max - min);

            adjList[a2].push(b2);
            adjList[b2].push(a2);
        }
        adjList[a1].push(b1);
        adjList[b1].push(a1);
    }

    return result;
};

