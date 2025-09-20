// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
    const map = {};

    for (const char of s) map[char] = (map[char] || 0) + 1;

    for (const char of t) {
        if (char in map && map[char] > 0) map[char]--;
        else return char;
    }

    return '';
};
