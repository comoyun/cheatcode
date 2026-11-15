// time: O(n)
// space: O(n)

/**
 * @param {number[]} arr
 * @return {number}
 */
const numOfSubarrays = arr => {
    const MOD = 10 ** 9 + 7;
    const n = arr.length;
    let result = 0;

    const dfs = (idx, count, sum) => {
        if (idx === n) return count;

        const newSum = sum + arr[idx];
        const newCount = count + (newSum & 1);

        const total = dfs(idx + 1, newCount, newSum);
        const rest = total - count;
        const c = n - idx;

        if ((arr[idx] & 1) !== (newSum & 1)) result += c - rest;
        else result += rest;

        result %= MOD;
        return total;
    };

    dfs(0, 0, 0);
    return result;
};

