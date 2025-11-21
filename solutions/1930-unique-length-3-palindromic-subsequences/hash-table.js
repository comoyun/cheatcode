// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = s => {
    let result = 0;

    const lastSeen = new Array(26).fill(-1);

    const getIdx = char => char.charCodeAt(0) - 97;

    for (let i = 0; i < s.length; i++) {
        const idx = getIdx(s[i]);
        lastSeen[idx] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const idx = getIdx(s[i]);
        const lastIdx = lastSeen[idx];

        if (lastIdx === -1) continue;
        if (lastIdx === i) continue;

        lastSeen[idx] = -1;

        const uniq = new Set();

        for (let j = i + 1; j < lastIdx; j++) {
            uniq.add(s[j]);
            if (uniq.size === 26) break;
        }

        result += uniq.size;
    }

    return result;
};
