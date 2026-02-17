// time: O(1)
// space O(1)

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = turnedOn => {
    const hours = [8, 4, 2, 1];
    const minutes = [32, 16, 8, 4, 2, 1];
    const result = new Set();

    const dfs = (h, m, hi, mi, c) => {
        if (h > 11 || m > 59) return;
        if (c > turnedOn) return;
        if (c === turnedOn) {
            result.add(`${h}:${m.toString().padStart(2, 0)}`);
            return;
        }

        if (hi < hours.length) {
            dfs(h + hours[hi], m, hi + 1, mi, c + 1);
            dfs(h, m, hi + 1, mi, c);
        }

        if (mi < minutes.length) {
            dfs(h, m + minutes[mi], hi, mi + 1, c + 1);
            dfs(h, m, hi, mi + 1, c);
        }
    };

    dfs(0, 0, 0, 0, 0);
    return [...result];
};
