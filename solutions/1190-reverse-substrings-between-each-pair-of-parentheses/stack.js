// time: O(n^2)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = s => {
    const stack = [[]];

    for (const char of s) {
        if (char === '(') {
            stack.push([]);
            continue;
        }

        if (char === ')') {
            const word = stack.pop().reverse();
            const current = stack.at(-1);

            for (const ch of word) current.push(ch);
            continue;
        }

        stack.at(-1).push(char);
    }

    return stack[0].join('');
};

