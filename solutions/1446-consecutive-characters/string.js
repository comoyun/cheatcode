// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const maxPower = s => {
    let count = 1,
        result = 1;

    for (let i = 1; i < s.length; i++) {
        count = s[i] === s[i - 1] ? count + 1 : 1;
        result = Math.max(result, count);
    }

    return s.length ? result : 0;
};

