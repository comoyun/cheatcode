// time: O(N * N)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = s => {
    // WARNING: this solution gives tle
    const n = s.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let ones = 0;
        let zeros = 0;

        for (let j = i; j < n; j++) {
            if (s[j] === '1') ones++;
            else zeros++;

            if (ones >= zeros * zeros) result++;
        }
    }

    return result;
};
