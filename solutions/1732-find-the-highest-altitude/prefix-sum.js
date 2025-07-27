// time: O(n)
// space: O(1)

/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = gains => {
    let result = 0,
        sum = 0;
    for (const gain of gains) {
        sum += gain;
        result = Math.max(result, sum);
    }
    return result;
};
