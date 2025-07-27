// time: O(n)
// space: O(k)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    k = k % nums.length;
    const last = [];
    for (let i = 0; i < k; i++) last.push(nums.pop());
    nums.reverse();
    for (const num of last) nums.push(num);
    nums.reverse();
};
