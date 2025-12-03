// time: O(n * m)
// space: O(1)

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    const map = {};

    for (let i = 0; i < order.length; i++) map[order[i]] = i;

    const sorted = (f, s) => {
        const a = words[f];
        const b = words[s];

        for (let i = 0; i < a.length; i++) {
            if (i >= b.length) return false;
            if (map[a[i]] < map[b[i]]) return true;
            if (map[a[i]] > map[b[i]]) return false;
        }

        return true;
    };

    for (let i = 0; i < words.length - 1; i++)
        if (!sorted(i, i + 1)) return false;

    return true;
};

