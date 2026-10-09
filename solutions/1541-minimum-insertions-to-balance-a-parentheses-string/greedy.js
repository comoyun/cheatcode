// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = s => {
    let balance = 0;
    let result = 0;

    for (const char of s) {
        if (char === '(') {
            if (balance % 2 !== 0) {
                balance--;
                result++;
            }
            balance += 2;
        } else balance--;

        if (balance < 0) {
            result++;
            balance += 2;
        }
    }

    result += balance;
    return result;
};
