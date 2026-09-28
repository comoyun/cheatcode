// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = s => {
    const stack = [];
    let result = 0;

    for (const char of s) {
        if (char === '(') stack.push(char)
        else if (char === ')') stack.pop();

        result = Math.max(result, stack.length);
    }

    return result;
};
