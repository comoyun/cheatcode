// time: O(N)
// space: O(1)

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    let i = digits.length - 1;
    for (; i >= 0; i--) {
        digits[i]++;

        if (digits[i] > 9) {
            digits[i] = 0;
            continue;
        }

        break;
    }

    if (i < 0) digits.unshift(1);

    return digits;
};
