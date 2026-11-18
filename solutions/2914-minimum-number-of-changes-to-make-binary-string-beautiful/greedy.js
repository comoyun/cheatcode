// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const minChanges = s => {
    const n = s.length;
    let curr = -1;
    let count = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        const bit = +s[i];

        if (bit === curr) {
            count++;
        } else {
            if (count & 1) {
                result++;
                count = 0;
                curr = -1;
                continue;
            }
            count = 1;
            curr = bit;
        }
    }

    return result;
};

