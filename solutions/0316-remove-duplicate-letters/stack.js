// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = s => {
    const stack = [];
    const map = {};
    const container = new Set();

    for (let i = 0; i < s.length; i++) map[s[i]] = i;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (container.has(char)) continue;
        while (stack.length && stack.at(-1) > char && map[stack.at(-1)] > i)
            container.delete(stack.pop());

        stack.push(char);
        container.add(char);
    }

    return stack.join('');
};
