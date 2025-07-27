// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
    let xor = 0;
    let a = 0;
    let b = 0;
    for (const num of nums) xor ^= num;
    for (const num of nums) {
        if ((xor ^ num) > num) a ^= num;
        else b ^= num;
    }
    return [a, b];
};
