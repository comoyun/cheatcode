// time: O(n^2)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countNonDecreasingSubarrays = (nums, k) => {
    const n = nums.length;

    const nextGreater = new Array(n).fill(n);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack.at(-1)] < nums[i])
            nextGreater[stack.pop()] = i;
        stack.push(i);
    }

    let left = 0;
    let prev = 0;
    let cost = 0;
    let result = 0;

    for (let right = 0; right < n; right++) {
        const curr = nums[right];

        if (curr < prev) cost += prev - curr;
        else prev = curr;

        while (cost > k) {
            const e = Math.min(nextGreater[left], right + 1);
            let delta = -nums[left] * (e - left - 1);
            let j = left + 1;
            let lastHead = left;
            while (j < e) {
                const nxt = Math.min(nextGreater[j], e);
                delta += nums[j] * (nxt - j);
                lastHead = j;
                j = nxt;
            }
            cost += delta;

            if (nextGreater[left] > right) prev = nums[lastHead];

            left++;
        }

        result += right - left + 1;
    }

    return result;
};
