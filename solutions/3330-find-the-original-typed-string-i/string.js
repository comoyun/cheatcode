/*
 * @title: String
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {string} word
 * @return {number}
 */
const possibleStringCount = word => {
    const n = word.length;
    let i = 0;
    let result = 0;
    while (i < n) {
        const char = word[i];
        let count = 1;

        while (i + count < n && word[i + count] === char) count++;
        if (count > 1) result += count - 1;

        i += count;
    }
    return result + 1;
};
