// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
    const quickSort = arr => {
        if (arr.length <= 1) return arr;
        const left = [], right = [], pivot = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) left.push(arr[i]);
            else right.push(arr[i]);
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    };
    const sorted = quickSort(nums, 0, nums.length - 1);
    for (let i = 0; i < sorted.length; i++) nums[i] = sorted[i];
};

