// time: O(n * d)
// space: O(n * d)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = nums => {
    const result = [];

    for (let num of nums) {
        const digits = [];
        while (num) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        while (digits.length) result.push(digits.pop());
    }

    return result;
};
