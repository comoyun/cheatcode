// time: O(1)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = s => {
    if (s.length === 1) return false;

    let sub = '';

    for (let i = 0; i < s.length / 2; i++) {
        sub += s[i];
        if (
            s.length % sub.length === 0 &&
            sub.repeat(s.length / sub.length - 1) === s.slice(i + 1)
        )
            return true;
    }

    return false;
};

