// time: O(n * 2^n)
// space: O(n * 2^n)

/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = s => {
    const n = s.length;
    const result = new Set();
    const comb = [];
    let max = 0;

    const dfs = (start, balance) => {
        if (start === n) {
            if (balance !== 0) return;

            const str = comb.join('');

            if (comb.length > max) {
                max = comb.length;
                result.clear();
            }

            if (comb.length === max) result.add(str);
            return;
        }

        const char = s[start];

        if (char !== '(' && char !== ')') {
            comb.push(char);
            dfs(start + 1, balance);
            comb.pop();
            return;
        }

        const change = char === '(' ? 1 : -1;

        if (balance + change >= 0) {
            comb.push(char);
            dfs(start + 1, balance + change);
            comb.pop();
        }

        dfs(start + 1, balance);
    };

    dfs(0, 0);

    return [...result];
};

