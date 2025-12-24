// time: O(N)
// space: O(N)

/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = s => {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '#') {
            const b = result.pop();
            const a = result.pop();
            result.push(a + b);
        } else {
            result.push(char);
        }
    }

    return result.map(idx => str[idx - 1]).join('');
};
