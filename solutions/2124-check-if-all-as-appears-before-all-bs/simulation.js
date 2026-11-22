// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = s => {
    const n = s.length;
    let sawA = false;
    let sawB = false;

    for (let i = 0; i < n; i++) {
        const char = s[i];

        if (!sawB && char === 'a') sawA = true;
        else if (char === 'b') sawB = true;
        else return false;
    }

    return true;
};
