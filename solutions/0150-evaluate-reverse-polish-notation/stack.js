// time: O(n)
// space: O(n)

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
    const stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };
    for (const char of tokens) {
        if (char in operators) {
            const b = Math.abs(stack.pop());
            const a = Math.abs(stack.pop());
            stack.push(operators[char](a, b));
            continue;
        }
        stack.push(Number(char));
    }

    return stack[0];
};

