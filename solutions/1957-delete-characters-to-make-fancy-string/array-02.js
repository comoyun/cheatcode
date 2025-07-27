// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = s => {
    let count = 1;
    let last = s[0];
    let result = last;
    for (let i = 1; i < s.length; i++) {
        if (last === s[i]) count++;
        else count = 1;
        if (count < 3) result += s[i];
        last = s[i];
    }
    return result;
};
