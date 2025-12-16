// time: O(N * M)
// space: O(1)

/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = words => {
    const freq = new Array(26).fill(Infinity);
    for (const word of words) {
        const f = new Array(26).fill(0);
        for (const char of word) f[char.charCodeAt(0) - 97]++;
        for (let i = 0; i < freq.length; i++) freq[i] = Math.min(freq[i], f[i]);
    }

    return freq
        .map((el, idx) => el && String.fromCharCode(97 + idx).repeat(el))
        .filter(el => el)
        .join('')
        .split('');
};

