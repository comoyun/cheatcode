// time: O(N)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const areNumbersAscending = s => {
    let last = -Infinity;

    for (const word of s.split(' ')) {
        if (isNaN(word)) continue;
        if (+word <= last) return false;
        last = +word;
    }

    return true;
};
