// time: O(N log N)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumCost = nums => {
    return (
        nums[0] +
        nums
            .slice(1)
            .sort((a, b) => a - b)
            .slice(0, 2)
            .reduce((prev, curr) => prev + curr, 0)
    );
};
