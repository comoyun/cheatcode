// time: O(n * m)
// space: O(n * m)

/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
const createGrid = (m, n) => {
    const graph = Array.from({ length: m }, () => new Array(n).fill('#'));

    for (let i = 0; i < n; i++) graph[0][i] = '.';

    for (let i = 0; i < m; i++) graph[i][n - 1] = '.';

    return graph.map(row => row.join(''));
};

