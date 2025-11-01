// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = s => {
    const result = [];
    let left = 0;

    for (let i = 1; i <= s.length; i++) {
        if (s[left] !== s[i]) {
            if (i - left >= 3) result.push([left, i - 1]);
            left = i;
        }
    }

    return result;
};
