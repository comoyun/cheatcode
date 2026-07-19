// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const smallestSubsequence = s => {
    const last = {};
    const seen = new Set();
    const stack = [];

    for (let i = 0; i < s.length; i++) last[s[i]] = i;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (seen.has(char)) continue;

        while (stack.length && stack.at(-1) > char && last[stack.at(-1)] > i)
            seen.delete(stack.pop());

        stack.push(char);
        seen.add(char);
    }

    return stack.join('');
};
