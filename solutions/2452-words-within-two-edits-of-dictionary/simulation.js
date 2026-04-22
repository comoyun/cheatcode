// time: O(q * m * n)
// space: O(1)

/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
const twoEditWords = (queries, dictionary) => {
    const result = [];
    for (const query of queries) {
        for (const word of dictionary) {
            let diff = 0;

            for (let j = 0; j < word.length; j++) {
                if (word[j] !== query[j]) diff++;
                if (diff > 2) break;
            }

            if (diff < 3) {
                result.push(query);
                break;
            }
        }
    }

    return result;
};

