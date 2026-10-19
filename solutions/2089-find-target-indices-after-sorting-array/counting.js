// time: O(n)
// space: O(k)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
    let less = 0;
    let greater = 0;

    for (const num of nums) {
        if (num < target) less++;
        else if (num > target) greater++;
    }

    return Array.from(
        { length: nums.length - greater - less },
        (_, idx) => less + idx
    );
};
