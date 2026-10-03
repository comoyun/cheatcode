// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = s => {
    const n = s.length;
    const dp = new Array(n).fill(0);
    let result = 0;

    for (let i = 1; i < n; i++) {
        if (s[i] === '(') continue;

        const parityIdx = i - dp[i - 1] - 1;

        if (parityIdx >= 0 && s[parityIdx] === '(') {
            dp[i] = dp[i - 1] + 2;

            const prevIdx = parityIdx - 1;
            if (prevIdx >= 0) dp[i] += dp[prevIdx];
        }

        result = Math.max(result, dp[i]);
    }

    return result;
};
