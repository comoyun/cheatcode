// time: O(n^2)
// space: O(1)

/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = colors => {
    const n = colors.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (colors[i] !== colors[j]) {
                result = Math.max(result, i - j);
                break;
            }
        }
    }
    return result;
};
