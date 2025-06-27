/*
 * @title: Brute Force
 * @time: Exponential
 * @space: Exponential
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const longestSubsequenceRepeatedK = (s, k) => {
    /* WARNING: Causes TLE */
    const n = s.length;
    const maxLen = Math.floor(n / k);
    const seen = new Set();
    let result = '';
    let curr = [''];

    for (let i = n - 1; i >= 0; i--) {
        const next = [...curr];
        for (const seq of curr) {
            const newSeq = s[i] + seq;
            if (newSeq.length > maxLen || seen.has(newSeq)) continue;
            seen.add(newSeq);
            next.push(newSeq);
        }
        curr = next;
    }

    seen.clear();
    curr.sort().reverse();

    for (const seq of curr) {
        if (!seq) continue;
        let j = 0,
            count = 0;
        for (const ch of s) {
            if (ch === seq[j]) j++;
            if (j === seq.length) {
                count++;
                j = 0;
            }
        }
        if (count >= k && seq.length > result.length) result = seq;
    }

    return result;
};
