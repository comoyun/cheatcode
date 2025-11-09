// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = s => {
    const n = s.length;
    const result = [];
    let left = 0;
    let right = n;

    for (const char of s) {
        if (char === 'I') result.push(left++);
        else result.push(right--);
    }

    result.push(right);

    return result;
};
