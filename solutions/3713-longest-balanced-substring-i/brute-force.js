// time: O(N * N)
// space: O(N)

/**
 * @param {string} s
 * @return {number}
 */
const longestBalanced = s => {
    const n = s.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        const map = {};
        let count = 0;
        let max = 1;
        for (let j = i; j < n; j++) {
            const curr = s[j];
            const len = j - i + 1;
            map[curr] ??= 0;
            map[curr]++;

            if (map[curr] > max) {
                max = map[curr];
                count = 0;
            }
            if (map[curr] === max) count++;
            if (len === count * max) result = Math.max(result, len);
        }
    }
    return result;
};
