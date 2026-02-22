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
    for (let i = 2; i < words.length; i++)
        if (text[i - 2] === first && text[i - 1] === second)
            result.push(words[i]);
    return result;
};

