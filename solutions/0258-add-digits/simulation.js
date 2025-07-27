// time: O(log n)
// space: O(1)

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = num => {
    let sum = num;
    while (sum > 9) {
        let s = 0;
        while (sum) {
            s += sum % 10;
            sum = Math.floor(sum / 10);
        }
        sum = s;
    }
    return sum;
};
