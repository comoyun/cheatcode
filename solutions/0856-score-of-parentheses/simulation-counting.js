// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = s => {
    let depth = -1;
    let score = 0;
    let prev = 0;
    let pending = 0;

    for (const char of s) {
        if (char === '(') {
            depth++;
            const value = 2 ** depth;

            if (value > prev) {
                pending = value;
                prev = value;
            } else {
                score += pending;
            }
        } else {
            if (pending) {
                score += pending;
                pending = 0;
                prev = 0;
            }
            depth--;
        }
    }

    return score;
};
