// time: O(n + m)
// space: O(n)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
const validSequence = (word1, word2) => {
    const n = word1.length;
    const m = word2.length;

    const suffix = new Array(n + 1).fill(0);
    let j = m - 1;

    const result = [];

    for (let i = n - 1; i >= 0; i--) {
        let eq = 0;
        if (word1[i] === word2[j]) {
            j--;
            eq++;
        }
        suffix[i] += suffix[i + 1] + eq;
    }

    j = 0;

    for (let i = 0; i < n; i++) {
        if (result.length === m) return result;
        if (word1[i] === word2[j]) {
            j++;
            result.push(i);
            continue;
        }

        const len = result.length + suffix[i + 1] + 1;

        if (len >= word2.length) {
            result.push(i);

            let l = j + 1;
            for (let k = i + 1; k < n; k++) {
                if (word1[k] === word2[l]) {
                    result.push(k);
                    l++;
                }
            }

            return result;
        }
    }

    return [];
};
