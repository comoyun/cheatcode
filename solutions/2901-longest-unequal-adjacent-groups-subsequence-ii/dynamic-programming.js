// time: O(n^2 * k)
// space: O(n^2)

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
const getWordsInLongestSubsequence = (words, groups) => {
    const canChoose = (a, b) => {
        if (a.length !== b.length) return false;
        let dist = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) dist++;
            if (dist > 1) return false;
        }
        return true;
    };

    const length = words.length;
    const dp = Array.from({ length }, (_, idx) => [words[idx]]);

    for (let i = 0; i < length; i++)
        for (let j = 0; j < i; j++)
            if (groups[i] !== groups[j] && canChoose(words[j], words[i]))
                if (dp[j].length + 1 > dp[i].length)
                    dp[i] = [...dp[j], words[i]];

    return dp.reduce((a, b) => (b.length > a.length ? b : a), []);
};
