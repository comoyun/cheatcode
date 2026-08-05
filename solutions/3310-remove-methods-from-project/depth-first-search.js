// time: O(n + m)
// space: O(n + m)

/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
const remainingMethods = (n, k, invocations) => {
    const result = Array.from({ length: n }, (_, idx) => idx);
    const adjList = Array.from({ length: n }, () => []);
    const sus = new Set([k]);

    for (const [u, v] of invocations) adjList[u].push(v);

    const dfs = node => {
        for (const nei of adjList[node]) {
            if (sus.has(nei)) continue;
            sus.add(nei);
            dfs(nei);
        }
    };

    dfs(k);

    for (const [u, v] of invocations)
        if (sus.has(u) !== sus.has(v)) return result;

    return result.filter(val => !sus.has(val));
};

// Examples:
console.log(
    remainingMethods(4, 1, [
        [1, 2],
        [0, 1],
        [3, 2],
    ])
);
console.log(
    remainingMethods(5, 0, [
        [1, 2],
        [0, 2],
        [0, 1],
        [3, 4],
    ])
);
console.log(
    remainingMethods(3, 2, [
        [1, 2],
        [0, 1],
        [2, 0],
    ])
);

