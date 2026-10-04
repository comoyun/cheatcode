// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = s => {
    let count = 0;
    let balance = 0;

    for (const char of s) {
        if (char === '(') balance++;
        else if (char === ')') balance--;
        else count++;

        if (balance < 0) {
            if (count) {
                balance++;
                count--;
                continue;
            }
            return false;
        }
    }

    count = 0;
    balance = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        if (char === ')') balance++;
        else if (char === '(') balance--;
        else count++;

        if (balance < 0) {
            if (count) {
                balance++;
                count--;
                continue;
            }
            return false;
        }
    }

    return true;
};
