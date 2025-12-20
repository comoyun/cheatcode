// time: O(N * M)
// space: O(N)

/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = strs => {
    const set = new Set();

    for (let i = 1; i < strs.length; i++) {
        const last = strs[i - 1];
        const curr = strs[i];

        for (let j = 0; j < last.length; j++) {
            if (set.has(j)) continue;

            const a = last[j];
            const b = curr[j];

            if (b < a) {
                set.add(j);
                continue;
            }
        }
    }

    return set.size;
};
