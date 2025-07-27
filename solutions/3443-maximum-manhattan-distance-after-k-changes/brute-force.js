// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxDistance = (s, k) => {
    let max = 0;
    const dirs = ['NE', 'NW', 'SE', 'SW'];
    for (const dir of dirs) {
        let remK = k,
            dist = 0;
        for (const char of s) {
            if (dir.indexOf(char) !== -1) {
                dist++;
            } else if (remK) {
                dist++;
                remK--;
            } else {
                dist--;
            }
            max = Math.max(max, dist);
        }
    }
    return max;
};
