// time: O(n log m)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = nums => {
    let left = nums[0];
    let right = nums[0];

    for (const num of nums) {
        left = Math.min(left, num);
        right = Math.max(right, num);
    }

    let result = 0;

    const countMoves = target => {
        let count = 0;
        for (const num of nums) count += Math.abs(target - num);
        return count;
    };

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const curr = countMoves(mid);
        const next = countMoves(mid + 1);
        const diff = curr - next;

        if (diff < 0) {
            right = mid - 1;
            result = curr;
        } else {
            left = mid + 1;
        }
    }

    return result;
};

