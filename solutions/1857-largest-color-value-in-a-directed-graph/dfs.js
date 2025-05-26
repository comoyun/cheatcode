/*
 * @title: DFS
 * @time: O(n^2)
 * @space: O(n)
 */

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
const largestPathValue = (colors, edges) => {
    /* WARNING: Gives TLE */

    let max = 0,
        containsCycle = false;
    const adjList = {};

    for (let i = 0; i < colors.length; i++) adjList[i] = [];
    for (const [from, to] of edges) adjList[from].push(to);

    const getId = letter => letter.charCodeAt(0) - 97;

    const dfs = (start, visited, path) => {
        if (containsCycle) return;
        if (visited.has(start)) {
            containsCycle = true;
            return;
        }

        visited.add(start);
        path[getId(colors[start])]++;

        max = Math.max(max, Math.max(...path));

        for (const to of adjList[start]) {
            dfs(to, visited, path);
            if (containsCycle) return;
        }

        visited.delete(start);
        path[getId(colors[start])]--;
    };

    for (let i = 0; i < colors.length; i++) {
        const visited = new Set();
        const path = new Array(26).fill(0);
        dfs(i, visited, path);
        if (containsCycle) break;
    }

    return containsCycle ? -1 : max;
};
