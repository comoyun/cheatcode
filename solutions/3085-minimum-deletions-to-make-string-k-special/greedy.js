/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const minimumDeletions = (word, k) => {
    const cnt = new Map();
    for (const ch of word) cnt.set(ch, (cnt.get(ch) || 0) + 1);
    let res = word.length;
    for (const a of cnt.values()) {
        let deleted = 0;
        for (const b of cnt.values()) {
            if (a > b) deleted += b;
            else if (b > a + k) deleted += b - (a + k);
        }
        res = Math.min(res, deleted);
    }
    return res;
};
