// time: O(1)
// space: O(1)

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const countOperations = (num1, num2) => {
    let result = 0;

    while (num1 && num2) {
        if (num1 >= num2) {
            const times = Math.floor(num1 / num2);
            result += times;
            num1 %= num2;
        } else {
            const times = Math.floor(num2 / num1);
            result += times;
            num2 %= num1;
        }
    }

    return result;
};
