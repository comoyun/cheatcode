// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
    const stack = [];
    let num = '',
        result = '';
    for (const char of s) {
        if (!isNaN(char)) num += char;
        else if (char === '[') {
            stack.push({ count: +num, str: '' });
            num = '';
        } else if (char === ']') {
            const { count, str } = stack.pop();
            const expanded = str.repeat(count);
            if (stack.length) stack[stack.length - 1].str += expanded;
            else result += expanded;
        } else {
            if (stack.length) stack[stack.length - 1].str += char;
            else result += char;
        }
    }
    return result;
};
