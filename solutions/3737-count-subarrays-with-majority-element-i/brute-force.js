// time: O(n^2)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countMajoritySubarrays = (nums, target) => {
    const n = nums.length;
    let result = 0;

    for (let left = 0; left < n; left++) {
        let count = 0;
        for (let right = left; right < n; right++) {
            const num = nums[right];
            const half = Math.floor((right - left + 1) / 2);
            if (num === target) count++;
            if (count > half) result++;
        }
    }

    return result;
};
