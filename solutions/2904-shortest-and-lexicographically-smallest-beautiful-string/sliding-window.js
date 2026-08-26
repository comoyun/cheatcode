// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const shortestBeautifulSubstring = (s, k) => {
    const n = s.length;
    let result = '';
    let left = 0;
    let ones = 0;

    for (let right = 0; right < n; right++) {
        ones += +s[right];

        while (ones > k || s[left] === '0') ones -= +s[left++];

        if (ones === k) {
            const length = right - left + 1;

            if (
                result === '' ||
                length < result.length ||
                (length === result.length && s.slice(left, right + 1) < result)
            )
                result = s.slice(left, right + 1);
        }
    }

    return result;
};

