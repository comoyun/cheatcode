// time: O(n)
// space: O(1)

/**
 * @param {string} word
 * @return {number}
 */
const possibleStringCount = word => {
    const n = word.length;
    let i = 0;
    let result = 1;
    while (i < n) {
        let count = 1;
        while (i + count < n && word[i + count] === word[i]) count++;

        // Single letters are typed intentionally.
        if (count > 1) result += count - 1;

        i += count;
    }
    return result;
};
