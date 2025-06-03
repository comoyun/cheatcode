/*
 * @title: BFS
 * @time: O(n^2)
 * @space: O(n)
 */

/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
const maxCandies = (status, candies, keys, containedBoxes, initialBoxes) => {
    const n = status.length,
        visited = new Array(n).fill(false),
        queue = [],
        closedBoxes = new Set(),
        availableKeys = new Set();
    let front = 0,
        result = 0;

    for (const box of initialBoxes) {
        if (status[box]) queue.push(box);
        else closedBoxes.add(box);
    }

    while (front < queue.length) {
        const box = queue[front++];
        if (visited[box]) continue;
        visited[box] = true;
        result += candies[box];

        for (const key of keys[box]) {
            if (!availableKeys.has(key)) {
                availableKeys.add(key);
                if (closedBoxes.has(key)) {
                    closedBoxes.delete(key);
                    queue.push(key);
                }
            }
        }

        for (const next of containedBoxes[box]) {
            if (visited[next]) continue;
            if (status[next] || availableKeys.has(next)) queue.push(next);
            else closedBoxes.add(next);
        }
    }

    return result;
};
