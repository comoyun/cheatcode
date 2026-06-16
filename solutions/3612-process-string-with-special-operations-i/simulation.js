// time: O(2^n)
// space: O(2^n)

/**
 * @param {string} s
 * @return {string}
 */
const processStr = s => {
    const result = [];

    for (const char of s) {
        if (char === '*') result.pop();
        else if (char === '#') result.push(...result);
        else if (char === '%') result.reverse();
        else result.push(char);
    }

    return result.join('');
};
