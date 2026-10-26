// time: O(n)
// space: O(n)

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    const n = prices.length;
    const prefix = new Array(n).fill(0);
    const suffix = new Array(n).fill(0);
    let min = prices[0];
    let max = prices[n - 1];
    let result = 0;

    for (let i = 1; i < n; i++) {
        prefix[i] = prices[i] - min;
        min = Math.min(min, prices[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = max - prices[i];
        max = Math.max(max, prices[i]);
    }

    for (let i = 1; i < n; i++) prefix[i] = Math.max(prefix[i], prefix[i - 1]);
    for (let i = n - 2; i >= 0; i--)
        suffix[i] = Math.max(suffix[i], suffix[i + 1]);

    for (let i = 0; i < n; i++)
        result = Math.max(result, suffix[i] + prefix[i]);

    return result;
};

