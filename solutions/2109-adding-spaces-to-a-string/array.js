// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = (s, spaces) => {
    s = s.split('');
    for (const space of spaces) s[space] = ' ' + s[space];
    return s.join('');
};
