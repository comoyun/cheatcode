// time: O(n ^ 3)
// space: O(n)

/**
 * @param {string} num
 * @return {boolean}
 */
const isAdditiveNumber = num => {
    const backtrack = (idx = 0, prev = null, curr = null, count = 0) => {
        if (idx === num.length && count >= 3) return true;

        for (let i = idx; i < num.length; i++) {
            const str = num.slice(idx, i + 1);

            if (str.length > 1 && str[0] === '0') break;

            const n = parseInt(str);

            if (count < 2) {
                if (prev === null) {
                    if (backtrack(i + 1, n, curr, count + 1)) return true;
                } else if (curr === null) {
                    if (backtrack(i + 1, prev, n, count + 1)) return true;
                }
            } else {
                if (n === prev + curr) {
                    if (backtrack(i + 1, curr, n, count + 1)) return true;
                }
            }
        }
        return false;
    };

    return backtrack();
};
