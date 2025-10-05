// time: O()
// space: O()

/**
 * @param {string} s
 * @return {string}
 */
const finalString = s => {
    let result = [];
    for (const char of s) {
        if (char === 'i') result.reverse();
        else result.push(char);
    }
    return result.join('');
};
