// time: O(n)
// space: O(n)

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    };

    const recur = () => {
        const token = tokens.pop();
        if (token in operators) {
            const b = recur();
            const a = recur();
            return operators[token](a, b);
        }

        return Number(token);
    };

    return recur();
};
