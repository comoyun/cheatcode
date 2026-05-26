// time: O(n)
// space: O(1)

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = word => {
    let result = 0;

    for (let i = 0; i < 26; i++) {
        const up = String.fromCharCode(65 + i);
        const lo = String.fromCharCode(97 + i);

        if (word.includes(up) && word.includes(lo)) result++;
    }

    return result;
};
