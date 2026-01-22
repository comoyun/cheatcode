// time: O(N ^ 3)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumPairRemoval = nums => {
    const isSorted = nums => {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) return false;
        }
        return true;
    };

    let count = 0;

    while (!isSorted(nums)) {
        let minSum = Infinity;
        let j = 0;

        for (let i = 1; i < nums.length; i++) {
            const sum = nums[i - 1] + nums[i];
            if (sum < minSum) {
                minSum = sum;
                j = i - 1;
            }
        }

        const result = [];
        for (let i = 0; i < nums.length; i++) {
            if (i === j) {
                result.push(nums[i] + nums[i + 1]);
                i++;
            } else {
                result.push(nums[i]);
            }
        }

        nums = result;
        count++;
    }

    return count;
};
