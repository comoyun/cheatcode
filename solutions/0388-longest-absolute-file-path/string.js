// time: O(n^2)
// space: O(n)

/**
 * @param {string} input
 * @return {number}
 */
const lengthLongestPath = input => {
    const n = input.length;
    const levels = {};
    let result = 0;
    let idx = 0;

    const getAbsolutePath = level => {
        const stack = [];

        while (level >= 0) {
            const name = levels[level--];
            stack.push(name);
        }

        return stack.join('/');
    };

    while (idx < n) {
        let level = 0;
        let isFile = false;

        while (idx < n && input[idx] === '\t') {
            idx++;
            level++;
        }

        const start = idx;

        while (idx < n && input[idx] !== '\n') {
            if (input[idx] === '.') isFile = true;
            idx++;
        }

        const name = input.slice(start, idx++);
        levels[level] = name;

        if (isFile) result = Math.max(result, getAbsolutePath(level).length);
    }

    return result;
};
