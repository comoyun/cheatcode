/*
 * @title: Stack
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeStars = s => {
    const stack = [];
    for (const char of s) {
        if (char !== '*') stack.push(char);
        else stack.pop();
    }
    return stack.join('');
};

