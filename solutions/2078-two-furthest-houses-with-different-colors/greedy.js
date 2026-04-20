// time: O(n)
// space: O(1)

/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = colors => {
    const n = colors.length;
    let result = 0;

    for (let i = 0; i < n - 1; i++)
        if (colors[n - 1] !== colors[i]) result = Math.max(result, n - i - 1);
    for (let i = n - 1; i > 1; i--)
        if (colors[0] !== colors[i]) result = Math.max(result, i);

    return result;
};
