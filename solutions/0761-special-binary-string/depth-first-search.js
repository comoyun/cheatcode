// time: O()
// space: O()

/**
 * @param {string} s
 * @return {string}
 */
const makeLargestSpecial = s => {
    const split = s => {
        const result = [];
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (char === '0') {
                const left = stack.pop();
                if (!stack.length) {
                    result.push(s.slice(left, i + 1));
                }
            } else {
                stack.push(i);
            }
        }

        return result;
    };

    const dfs = part => {
        const result = [];
        for (const sp of split(part)) {
            if (sp.length > 2) {
                result.push('1' + dfs(sp.slice(1, sp.length - 1)) + '0');
            } else {
                result.push(sp);
            }
        }
        return result.sort().reverse().join('');
    };

    return dfs(s);
};
