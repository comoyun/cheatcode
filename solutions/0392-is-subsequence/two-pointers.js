// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let a = 0;
    for (const bc of t) {
        const ac = s[a];
        if (ac === bc) a++;
        if (a === s.length) break;
    }
    return a === s.length;
};

