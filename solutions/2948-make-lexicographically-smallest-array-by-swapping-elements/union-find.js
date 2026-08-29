// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
const lexicographicallySmallestArray = (nums, limit) => {
    const n = nums.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    const result = [...nums];

    indices.sort((a, b) => nums[a] - nums[b]);

    let i = 0;
    while (i < n) {
        const block = [indices[i]];

        while (i + 1 < n && nums[indices[i + 1]] - nums[indices[i]] <= limit)
            block.push(indices[++i]);

        const positions = [...block].sort((a, b) => a - b);

        for (let j = 0; j < block.length; j++)
            result[positions[j]] = nums[block[j]];

        i++;
    }

    return result;
};

