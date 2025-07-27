// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = nums => {
    let evenCount = 0;
    for (const num of nums) {
        if (num > 9 && num < 100) evenCount++;
        if (num > 999 && num < 10000) evenCount++;
        if (num > 99999 && num < 1000000) evenCount++;
    }
    return evenCount;
};
