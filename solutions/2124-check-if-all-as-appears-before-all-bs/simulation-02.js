// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = s => {
    for (let i = 0; i < s.length - 1; i++)
        if (s[i] + s[i + 1] === 'ba') return false;
    return true;
};
