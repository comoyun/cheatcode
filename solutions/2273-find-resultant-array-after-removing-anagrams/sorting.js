// time: O(n * m log m)
// space: O(m)

/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = words => {
    const result = [];
    let prev = '';
    for (const word of words) {
        const sorted = word.split('').sort().join('');
        if (sorted !== prev) result.push(word);
        prev = sorted;
    }
    return result;
};

