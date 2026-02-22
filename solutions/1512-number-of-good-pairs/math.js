// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = nums => {
    const freq = new Array(101).fill(0);
    let result = 0;

    for (const num of nums) freq[num]++;
    for (const f of freq) result += (f * (f - 1)) / 2;

    return result;
};
