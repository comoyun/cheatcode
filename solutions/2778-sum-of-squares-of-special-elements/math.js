// time: O(sqrt(n))
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfSquares = nums => {
    const n = nums.length;
    let result = 0;

    for (i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            const d = n / i;
            if (d > i) result += nums[i - 1] ** 2;
            result += nums[d - 1] ** 2;
        }
    }

    return result;
};
