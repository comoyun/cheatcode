// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeSum = nums => {
    let min1 = Infinity,
        min2 = Infinity,
        min3 = Infinity,
        max1 = -Infinity,
        max2 = -Infinity,
        max3 = -Infinity;

    for (const num of nums) {
        if (min1 > num) {
            min3 = min2;
            min2 = min1;
            min1 = num;
        } else if (min2 > num) {
            min3 = min2;
            min2 = num;
        } else if (min3 > num) {
            min3 = num;
        }

        if (max1 < num) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (max2 < num) {
            max3 = max2;
            max2 = num;
        } else if (max3 < num) {
            max3 = num;
        }
    }

    return Math.min(max2 - min2, max1 - min3, max3 - min1);
};

// Examples:
// 9 27 33 59 81
console.log(minimizeSum([59, 27, 9, 81, 33]));
