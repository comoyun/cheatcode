// time: O(n * n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumCounts = nums => {
    const n = nums.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        const set = new Set();
        for (let j = i; j < n; j++) {
            const num = nums[j];
            set.add(num);
            result += set.size ** 2;
        }
    }

    return result;
};

