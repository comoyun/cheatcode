// time: O(n^2)
// space: O(n)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxPalindromes = (s, k) => {
    const n = s.length;
    let result = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
        let found = false;

        let left = i;
        let right = i;

        while (left >= start && right < n) {
            if (s[left] !== s[right]) break;

            const length = right - left + 1;

            if (length >= k) {
                start = right + 1;
                result++;
                i = right;
                found = true;
                break;
            }

            left--;
            right++;
        }

        if (found) continue;

        left = i;
        right = i + 1;

        while (left >= start && right < n) {
            if (s[left] !== s[right]) break;

            const length = right - left + 1;

            if (length >= k) {
                start = right + 1;
                result++;
                i = right;
                break;
            }

            left--;
            right++;
        }
    }

    return result;
};

