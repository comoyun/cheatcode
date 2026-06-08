// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {
    const larger = [];
    let pivotCount = 0;

    for (const num of nums) {
        if (num > pivot) larger.push(num);
        else if (num === pivot) pivotCount++;
    }

    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] < pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }

    let k = 0;

    while (pivotCount--) nums[i++] = pivot;

    while (i < nums.length) nums[i++] = larger[k++];

    return nums;
};

