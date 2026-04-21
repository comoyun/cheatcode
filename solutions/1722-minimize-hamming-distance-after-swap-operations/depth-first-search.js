// time: O(n + m)
// space: O(n + m)

/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
const minimumHammingDistance = (source, target, allowedSwaps) => {
    const adjList = {};
    const visited = new Set();
    const paths = [];
    let result = source.length;

    for (const [u, v] of allowedSwaps) {
        adjList[u] ??= [];
        adjList[v] ??= [];
        adjList[u].push(v);
        adjList[v].push(u);
    }

    const dfs = (start, path) => {
        if (path.has(start)) return;
        path.add(start);
        for (const nei of adjList[start]) {
            if (path.has(nei)) continue;
            dfs(+nei, path);
        }
        visited.add(start);
    };

    for (const start in adjList) {
        if (visited.has(+start)) continue;
        const path = new Set();
        dfs(+start, path);
        paths.push(path);
    }

    for (const path of paths) {
        const mapA = {};
        const mapB = {};

        for (const idx of path) {
            mapA[source[idx]] ??= 0;
            mapA[source[idx]]++;
            mapB[target[idx]] ??= 0;
            mapB[target[idx]]++;
        }

        let common = 0;
        for (const key in mapA)
            if (key in mapB) common += Math.min(mapA[key], mapB[key]);

        result -= common;
    }

    for (let i = 0; i < source.length; i++)
        if (!(i in adjList) && source[i] === target[i]) result--;

    return result;
};

