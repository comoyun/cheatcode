// time: O(n * n)
// space: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
const hasSameDigits = s => {
    let result = '';
    while (s.length > 2) {
        for (let i = 0; i < s.length - 1; i++)
            result += (+s[i] + +s[i + 1]) % 10;
        s = result;
        result = '';
    }
    return s.length === 2 && s[0] === s[1];
};
