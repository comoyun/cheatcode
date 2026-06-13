// time: O(n * m)
// space: O(n)

/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
const mapWordWeights = (words, weights) => {
    const result = [];
    for (const word of words) {
        let sum = 0;
        const offset = 97;

        for (const char of word) sum += weights[char.charCodeAt(0) - offset];

        result.push(String.fromCharCode(122 - (sum % 26)));
    }

    return result.join('');
};

