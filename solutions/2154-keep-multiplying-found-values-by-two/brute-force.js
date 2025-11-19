// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
    let result = original;
    for (let i = original; i <= 1000; i *= 2) {
        let found = false;
        for (const num of nums) {
            if (num === i) {
                result = i * 2;
                found = true;
                break;
            }
        }
        if (!found) break;
    }
    return result;
};
