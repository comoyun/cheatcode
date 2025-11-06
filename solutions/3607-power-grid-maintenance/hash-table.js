// time: O()
// space: O()

/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
const processQueries = (c, connections, queries) => {
    const seen = new Set();
    const adjList = {};
    const map = {};
    const result = [];

    for (const [u, v] of connections) {
        adjList[u] ??= [];
        adjList[v] ??= [];
        adjList[u].push(v);
        adjList[v].push(u);
    }

    const groups = [];

    const dfs = (node, group) => {
        seen.add(node);
        group.add(node);
        for (const nei of adjList[node] || [])
            if (!seen.has(nei)) dfs(nei, group);
    };

    for (let i = 1; i <= c; i++) {
        if (seen.has(i)) continue;
        const group = new Set();
        dfs(i, group);
        groups.push(group);
    }

    for (let i = 0; i < groups.length; i++)
        for (const id of groups[i]) map[id] = i;

    for (const [action, x] of queries) {
        if (action === 2) {
            const groupIdx = map[x];
            if (groupIdx !== undefined) groups[groupIdx].delete(x);
        } else {
            const groupIdx = map[x];

            if (groupIdx === undefined) {
                result.push(-1);
                continue;
            }

            const group = groups[groupIdx];

            if (group.size === 0) {
                result.push(-1);
                continue;
            }

            let min = Math.min(...group); // this line is the problem
            if (group.size) result.push(min);
            else result.push(-1);
        }
    }

    return result;
};
