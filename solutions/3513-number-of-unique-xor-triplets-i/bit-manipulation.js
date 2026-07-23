// time: O(log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const uniqueXorTriplets = nums => {
    const n = nums.length;
    if (n === 1) return 1;
    if (n < 3) return 2;

    let max = 0;
    let count = 0;
    let pow = 1;
    for (const num of nums) max = Math.max(max, num);

    while (max) {
        const bit = max & 1;
        if (!bit) count += pow;
        max >>= 1;
        pow <<= 1;
    }

    return n + count + 1;
};

