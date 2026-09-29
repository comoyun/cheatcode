// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = s => {
    let balance = 0;
    let result = 0;

    for (const char of s) {
        balance += char === '(' ? 1 : char === ')' ? -1 : 0;
        result = Math.max(result, balance);
    }

    return result;
};




