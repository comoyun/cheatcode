// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = s => {
    const n = s.length;
    let result = 0;
    let i = 0;
    while (i < n) {
        let bit = +s[i];
        let next = i + 1;
        while (next < n && +s[next] === bit) next++;
        const lock = next;
        bit = bit ? 0 : 1;
        while (next < n && next - lock < lock - i && +s[next] === bit) {
            next++;
            result++;
        }
        i = lock;
    }
    return result;
};
