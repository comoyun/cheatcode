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
    const queue = [...initialBoxes];
    const keyless = [];
    const availableKeys = new Set();
    let result = 0;

    while (queue.length) {
        while (queue.length) {
            const box = queue.shift();

            if (status[box] === 2) continue;
            if (!status[box] && !availableKeys.has(box)) {
                keyless.push(box);
                continue;
            }

            for (const key of keys[box]) availableKeys.add(key);

            for (const containedBox of containedBoxes[box]) {
                if (status[containedBox] === 2) continue;

                if (status[containedBox] === 1) {
                    queue.push(containedBox);
                    continue;
                }

                if (status[containedBox] === 0) {
                    if (availableKeys.has(containedBox))
                        queue.push(containedBox);
                    else keyless.push(containedBox);
                }
            }

            status[box] = 2;
            result += candies[box];
        }

        for (let i = keyless.length - 1; i >= 0; i--) {
            const b = keyless[i];
            if (availableKeys.has(b)) {
                queue.push(b);
                keyless.splice(i, 1);
            }
        }
    }

    return result;
};
