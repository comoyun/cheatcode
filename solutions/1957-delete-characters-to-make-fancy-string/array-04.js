// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = s => {
    const result = [];
    for (let i = 0; i < s.length; i++)
        if (
            result.length < 2 ||
            result.at(-1) !== s[i] ||
            result.at(-2) !== s[i]
        )
            result.push(s[i]);

    return result.join('');
};
