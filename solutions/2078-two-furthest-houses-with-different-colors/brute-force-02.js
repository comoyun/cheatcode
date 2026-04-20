// time: O(n^2)
// space: O(n)

/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = colors => {
    const map = {};
    let result = 0;

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];

        map[color] ??= new Set();

        for (let j = 0; j < i; j++)
            if (!map[color].has(j)) result = Math.max(result, i - j);

        map[color].add(i);
    }

    return result;
};

