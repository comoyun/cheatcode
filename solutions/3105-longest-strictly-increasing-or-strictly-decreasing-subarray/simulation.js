// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestMonotonicSubarray = nums => {
    /*
        Problem: need to find the length of the longest increasing
        or decreasing subarray.

        Monotonic subarray should maintain the same direction. 

        When we loop through the array, the difference of current number
        and the previous tells us the direction (-1 for decreasing, 1 for increasing, 0 for equal nums).
        We should lock onto a direction and increment counter as long as we are following that direction.

        If the direction changes, we update the lock and reset the counter
        to 2, since the new subarray starts with the previous and current
        nums.

        If two consecutive nums are equal, reset the counter to 1.
    */

    let length = 0;
    let lock = 0;
    let result = 1;

    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];
        const cmp = curr > prev ? 1 : curr === prev ? 0 : -1;

        if (cmp && cmp === lock) {
            length++;
        } else if (cmp) {
            length = 2;
            lock = cmp;
        } else {
            length = 1;
        }

        result = Math.max(result, length);
    }

    return result;
};

