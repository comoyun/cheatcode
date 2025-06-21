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
    const freq = {};
    for (const char of word) freq[char] = (freq[char] || 0) + 1;

    const freqArr = Object.values(freq).sort((a, b) => a - b);
    const n = freqArr.length;
    let minDel = Infinity;

    for (let i = 0; i < n; i++) {
        const target = freqArr[i];
        let deletions = 0;

        for (let j = 0; j < n; j++) {
            const f = freqArr[j];

            if (f < target) deletions += f;
            else if (f > target + k) deletions += f - (target + k);
        }

        minDel = Math.min(minDel, deletions);
    }

    return minDel;
};
