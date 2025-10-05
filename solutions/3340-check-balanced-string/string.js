// time: O(n)
// space: O(1)

/**
 * @param {string} num
 * @return {boolean}
 */
const isBalanced = num => {
    let res = 0;
    for (let i = 0; i < num.length; i++) {
        if (i & 1) res -= +num[i];
        else res += +num[i];
    }
    return res === 0;
};

