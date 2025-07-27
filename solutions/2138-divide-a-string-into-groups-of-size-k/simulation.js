// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = (s, k, fill) => {
    const result = [];
    let group = [];
    for (const char of s) {
        group.push(char);

        if (group.length === k) {
            result.push(group.join(''));
            group = [];
        }
    }

    if (group.length && group.length < k) {
        const diff = k - group.length;
        const rem = fill.repeat(diff);
        group = [...group, rem];
        result.push(group.join(''));
    }

    return result;
};

