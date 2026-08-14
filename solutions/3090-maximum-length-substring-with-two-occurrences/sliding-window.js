// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const maximumLengthSubstring = s => {
    const freq = new Array(26).fill(0);
    const n = s.length;
    const offset = 97;
    let result = 0;
    let right = 0;
    let left = 0;

    for (; right < n; right++) {
        const char = s[right];
        const code = char.charCodeAt(0);
        const idx = code - offset;
        freq[idx]++;

        while (freq[idx] > 2) {
            const char = s[left];
            const code = char.charCodeAt(0);
            const idx = code - offset;
            freq[idx]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};
