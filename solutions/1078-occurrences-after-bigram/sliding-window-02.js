// time: O(n)
// space: O(n)

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) => {
    const result = [];
    const words = text.split(' ');
    let f, s;
    for (let i = 0; i < words.length; i++) {
        if (f === first && s === second) result.push(words[i]);
        f = s;
        s = words[i];
    }
    return result;
};
