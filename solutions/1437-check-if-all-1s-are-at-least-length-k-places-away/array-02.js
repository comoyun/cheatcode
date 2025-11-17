// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = (nums, k) => {
    let i = 0;

    while (i < nums.length) {
        if (nums[i]) {
            let zeros = 0;
            i++;
            while (i < nums.length && nums[i] === 0) {
                zeros++;
                i++;
            }
            if (i < nums.length && zeros < k) return false;
            continue;
        }

        i++;
    }

    return true;
};
