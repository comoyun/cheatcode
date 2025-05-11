/*
 * @title: Hashmap
 * @time: O(n^2)
 * @space: O(n^2)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = grid => {
    const map = {};
    let count = 0;

    for (const row of grid) {
        const key = row.join(',');
        map[key] = (map[key] || 0) + 1;
    }

    for (let i = 0; i < grid[0].length; i++) {
        const col = [];
        for (let j = 0; j < grid.length; j++) col.push(grid[j][i]);
        const key = col.join(',');
        if (key in map) count += map[key];
    }

    return count;
};
