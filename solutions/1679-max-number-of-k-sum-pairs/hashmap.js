/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    const freq = {};
    let operations = 0;
    for (const num of nums) freq[num] = (freq[num] || 0) + 1;
    for (const num of nums) {
        const complement = k - num;
        if (freq[num] > 0 && freq[complement] > 0) {
            if (num === complement && freq[num] < 2) continue;
            operations++;
            freq[num]--;
            freq[complement]--;
        }
    }
    return operations;
};
