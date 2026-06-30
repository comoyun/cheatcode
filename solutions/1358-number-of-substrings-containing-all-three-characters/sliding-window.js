// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = s => {
    const n = s.length;
    let left = 0;
    let right = 0;
    let result = 0;
    const freq = { a: 0, b: 0, c: 0 };

    for (; right < n; right++) {
        const char = s[right];
        freq[char]++;

        while (freq.a && freq.b && freq.c) {
            result += n - right;
            const char = s[left++];
            freq[char]--;
        }
    }

    return result;
};
