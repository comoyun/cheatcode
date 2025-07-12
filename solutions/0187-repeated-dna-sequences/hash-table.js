/*
 * @title: Hash Table
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = s => {
    const map = {
        A: 1,
        C: 2,
        G: 3,
        T: 4,
    };

    const base = 4;
    const len = 10;
    const pow = base ** (len - 1);
    let hash = 0;

    const seen = new Set();
    const result = new Set();

    for (let i = 0; i < len; i++) hash = hash * base + map[s[i]];

    seen.add(hash);

    for (let i = len; i < s.length; i++) {
        hash -= pow * map[s[i - len]];
        hash = hash * base + map[s[i]];
        if (seen.has(hash)) result.add(s.slice(i - len + 1, i + 1));
        else seen.add(hash);
    }

    return [...result];
};

