// time: O(N)
// space: O(N)

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits =>
    ('' + (BigInt(digits.join('')) + 1n)).split('').map(Number);
