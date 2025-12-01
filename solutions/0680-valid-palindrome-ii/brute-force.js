// time: O(n^2)
// space: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = s => {
    for (let i = 0; i < s.length; i++) {
        const left = s.slice(0, i);
        const right = s.slice(i + 1, s.length);
        const str = left + right;
        const reversed = str.split('').reverse().join('');

        if (str === reversed) return true;
    }

    return false;
};
