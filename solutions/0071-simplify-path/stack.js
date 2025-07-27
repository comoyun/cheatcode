// time: O(n)
// space: O(n)

/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = path => {
    const parts = path.split('/'),
        stack = [];

    for (const part of parts) {
        if (part === '' || part === '.') continue;
        if (part === '..') stack.pop();
        else stack.push(part);
    }

    return '/' + stack.join('/');
};
