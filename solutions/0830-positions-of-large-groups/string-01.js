// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = s => {
    const result = [];
    let left = 0;
    let len = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const prev = s[left];

        if (curr !== prev) {
            if (i - left >= 3) result.push([left, i - 1]);
            left = i;
        }

        len = i - left + 1;
    }

    if (len >= 3) result.push([left, s.length - 1]);

    return result;
};
