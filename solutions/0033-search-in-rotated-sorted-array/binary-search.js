// time: O(log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    const findK = () => {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);

            if (nums[mid] > nums[nums.length - 1]) left = mid + 1;
            else right = mid - 1;
        }

        return right;
    };

    const binarySearch = (left, right) => {
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (nums[mid] === target) return mid;
            else if (nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
        return -1;
    };

    const k = findK();
    const leftHalf = binarySearch(0, k);

    if (leftHalf !== -1) return leftHalf;
    return binarySearch(k + 1, nums.length - 1);
};

