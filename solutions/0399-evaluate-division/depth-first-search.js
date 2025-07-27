// time: O(n)
// space: O(n)

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
    const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    const dfs = (curr, target, visited = new Set()) => {
        if (!(curr in graph) || !(target in graph)) return -1;
        if (curr === target) return 1;
        visited.add(curr);

        for (const [neighbor, val] of graph[curr]) {
            if (visited.has(neighbor)) continue;
            const res = dfs(neighbor, target, visited);
            if (res !== -1) return res * val;
        }

        return -1;
    };

    return queries.map(([a, b]) => dfs(a, b));
};
