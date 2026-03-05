// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const minOperations = s => {
    const n = s.length;
    let b = +s[0];
    let changes1 = 0;
    let changes2 = 0;

    for (let i = 1; i < n; i++) {
        b = b ? 0 : 1;
        if (b !== +s[i]) changes1++;
    }

    for (let i = 1; i < n; i++) {
        if (b !== +s[i]) changes2++;
        b = b ? 0 : 1;
    }

    return Math.min(changes1, changes2);
};
