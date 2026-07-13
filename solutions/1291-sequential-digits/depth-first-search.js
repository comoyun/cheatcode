// time: O(1)
// space: O(1)

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = (low, high) => {
    const result = [];

    const dfs = num => {
        if (num > high) return;
        if (num >= low) result.push(num);

        const digit = num % 10;

        if (digit === 9) return;

        dfs(num * 10 + digit + 1);
    };

    for (let i = 1; i < 10; i++) dfs(i);

    return result.sort((a, b) => a - b);
};
