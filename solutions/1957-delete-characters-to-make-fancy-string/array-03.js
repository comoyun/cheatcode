// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = s => {
    s = s.split('');
    let i = 2;
    let j = 2;
    while (i < s.length) {
        while (i < s.length && s[i] === s[j - 1] && s[i] === s[j - 2]) i++;
        if (i === s.length) break;
        s[j++] = s[i++];
    }
    s.length = j;
    return s.join('');
};

