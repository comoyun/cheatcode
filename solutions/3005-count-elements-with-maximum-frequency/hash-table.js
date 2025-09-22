// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = nums => {
    const map = {};
    let maxCount = 0;
    let max = 0;
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
        if (map[num] > max) {
            max = map[num];
            maxCount = 1;
        } else if (map[num] === max) {
            maxCount++;
        }
    }

    return maxCount * max;
};

