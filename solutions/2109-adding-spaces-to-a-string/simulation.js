// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = (s, spaces) => {
    const result = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (spaces[j] === i) {
            result.push(' ');
            j++;
        }
        result.push(s[i]);
    }
    return result.join('');
};
