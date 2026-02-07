// time: O(N)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = s => {
    let b = 0;
    let result = 0;

    for (const ch of s) {
        if (ch === 'b') b++;
        else result = Math.min(result + 1, b);
    }

    return result;
};
