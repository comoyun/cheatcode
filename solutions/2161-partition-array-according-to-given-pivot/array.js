// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {
    const smaller = [];
    const pivots = [];
    const larger = [];

    for (const num of nums) {
        if (num > pivot) larger.push(num);
        else if (num < pivot) smaller.push(num);
        else pivots.push(num);
    }

    return [...smaller, ...pivots, ...larger];
};
