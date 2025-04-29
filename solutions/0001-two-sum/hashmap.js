/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const search = target - num;
        if (map.has(search)) return [map.get(search), i];
        map.set(num, i);
    }

    /* No need to return anything here,
     * as the problem guarantees at least one solution. */
};
