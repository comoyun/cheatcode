// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = s => {
    let balance = 0;
    let result = 0;

    for (const char of s) {
        if (char === '(') balance++;
        else balance--;

        if (balance < 0) {
            balance++;
            result++;
        }
    }

    result += balance;
    return result;
};
