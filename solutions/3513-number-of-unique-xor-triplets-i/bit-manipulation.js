// time: O(log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const uniqueXorTriplets = nums => {
    let max = nums.length;
    let result = max;
    let count = 0;
    let pow = 1;

    if (max < 3) return max;

    while (max) {
        const bit = max & 1;
        if (!bit) count += pow;
        max >>= 1;
        pow <<= 1;
    }

    return result + count + 1;
};
