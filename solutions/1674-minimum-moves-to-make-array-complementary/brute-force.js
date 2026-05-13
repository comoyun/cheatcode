// time: O(n * limit)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const minMoves = (nums, limit) => {
    const n = nums.length;
    let result = Infinity;

    const getCount = target => {
        let count = 0;

        for (let i = 0; i < n / 2; i++) {
            const a = nums[i];
            const b = nums[n - i - 1];

            const sum = a + b;

            if (sum === target) continue;

            const low = Math.min(a, b) + 1;
            const high = Math.max(a, b) + limit;

            if (target >= low && target <= high) count += 1;
            else count += 2;

            if (count >= result) return Infinity;
        }

        return count;
    };

    for (let target = 2; target <= limit * 2; target++)
        result = Math.min(result, getCount(target));

    return result;
};

