// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = lim => {
    const result = [];
    const dfs = n => {
        const next = n * 10;
        for (let i = 0; i < 10; i++) {
            const num = next + i;
            if (num > lim) break;
            if (num === 0) continue;
            result.push(num);
            dfs(num);
        }
    };

    dfs(0);
    return result;
};
