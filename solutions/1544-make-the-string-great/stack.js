// time: O()
// space: O()

/**
 * @param {string} s
 * @return {string}
 */
const makeGood = s => {
    const stack = [];

    for (const char of s) {
        let skip = false;
        while (
            stack.length &&
            stack.at(-1).toLowerCase() === char.toLowerCase() &&
            stack.at(-1) !== char
        ) {
            stack.pop();
            skip = true;
        }
        if (!skip) stack.push(char);
    }

    return stack.join('');
};
