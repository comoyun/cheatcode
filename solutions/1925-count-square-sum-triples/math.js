// time: O(n ^ 2)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const countTriples = n => {
    let result = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            const c = a ** 2 + b ** 2;
            const sqrt = Math.sqrt(c);

            if (sqrt <= n && sqrt === (sqrt | 0)) result += 2;
        }
    }
    return result;
};
