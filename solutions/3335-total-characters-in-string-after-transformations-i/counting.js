// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
const lengthAfterTransformations = (s, t) => {
    const mod = 1e9 + 7;
    let freq = Array(26).fill(0);

    for (const char of s) freq[char.charCodeAt(0) - 97]++;

    while (t--) {
        const newFreq = Array(26).fill(0);

        for (let i = 0; i < 26; i++) {
            if (i === 25) {
                newFreq[0] = (newFreq[0] + freq[25]) % mod;
                newFreq[1] = (newFreq[1] + freq[25]) % mod;
                continue;
            }
            newFreq[i + 1] = (newFreq[i + 1] + freq[i]) % mod;
        }

        freq = newFreq;
    }

    return freq.reduce((acc, count) => (acc + count) % mod, 0);
};
