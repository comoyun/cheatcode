// time: O(log2 N)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = n => {
    let prev = null;
    while (n) {
        const curr = n & 1;
        if (curr === prev) return false;
        prev = curr;
        n >>= 1;
    }
    return true;
};

