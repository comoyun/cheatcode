// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (nums, k) => {
    let left = 0,
        right = 0,
        sum = 0,
        length = 0,
        count = 0;

    while (right < nums.length) {
        sum += nums[right];
        length = right - left + 1;

        while (sum * length >= k && left <= right) {
            sum -= nums[left++];
            length = right - left + 1;
        }

        count += length;
        right++;
    }

    return count;
};
