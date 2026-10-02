// time: O(exponential)
// space: O(exponential)

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
    const result = [];
    const comb = [];

    const backtrack = (open, balance) => {
        if (open > n) return;

        if (open === n && balance === 0) {
            result.push(comb.join(''));
            return;
        }

        comb.push('(');
        backtrack(open + 1, balance + 1);
        comb.pop();

        if (balance > 0) {
            comb.push(')');
            backtrack(open, balance - 1);
            comb.pop();
        }
    };

    backtrack(0, 0);
    return result;
};

