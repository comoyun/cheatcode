// time: O(N)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = s => {
    let a = 0;
    let b = 0;
    let result = s.length;

    for (const char of s) if (char === 'a') a++;
    for (const char of s) {
        if (char === 'a') a--;
        result = Math.min(result, a + b);
        if (char === 'b') b++;
    }

    return result;
};
