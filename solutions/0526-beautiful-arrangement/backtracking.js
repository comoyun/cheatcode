// time: O(exponential)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const countArrangement = n => {
    const seen = new Set();

    const dfs = (len = 0) => {
        if (len === n) return 1;
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (seen.has(i)) continue;
            const idx = len + 1;
            if (idx % i !== 0 && i % idx !== 0) continue;
            seen.add(i);
            count += dfs(idx);
            seen.delete(i);
        }

        return count;
    };

    return dfs();
};

/*

slightly faster approach using bitmask since n is very small (n <= 15):

const dfs = (len = 0, mask = 0) => {
    if (len === n) return 1;
    let count = 0;
    const idx = len + 1;
    for (let i = 1; i <= n; i++) {
        if (mask & (1 << i)) continue;
        if (idx % i !== 0 && i % idx !== 0) continue;
        count += dfs(idx, mask | (1 << i));
    }
    return count;
};
return dfs();
*/

