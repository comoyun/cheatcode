// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = nums => {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (const num of nums) {
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }
    }

    let min1 = Infinity;
    let min2 = Infinity;

    for (const num of nums) {
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(maximumProduct([1, 2, 3, 4]));
