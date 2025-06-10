/*
 * @title: Hash-table
 * @time: O(n)
 * @space: O(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const freq = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - a]++;
        freq[t.charCodeAt(i) - a]--;
    }

    return freq.every(x => !x);
};
