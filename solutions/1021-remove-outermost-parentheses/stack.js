// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = s => {
    const n = s.length;
    const stack = [];
    s = s.split('');

    for (let i = 0; i < n; i++) {
        const char = s[i];
        if (char === '(') stack.push(i);
        else if (stack.length > 1) stack.pop();
        else {
            s[stack.pop()] = '';
            s[i] = '';
        }
    }

    return s.join('');
};
