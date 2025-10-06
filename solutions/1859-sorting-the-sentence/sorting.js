// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = s => {
    const arr = [];
    for (const w of s.split(' ')) arr[w.at(-1) - 1] = w.slice(0, -1);
    return arr.join(' ');
};

