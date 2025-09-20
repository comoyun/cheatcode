// time: O(n log n)
// space: O(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
    s = s.split('').sort();
    t = t.split('').sort();

    for (let i = 0; i < s.length; i++)
        if (s[i] !== t[i]) return t[i];

    return t[s.length];
};
