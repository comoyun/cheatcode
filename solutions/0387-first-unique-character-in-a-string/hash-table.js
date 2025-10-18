// time: O()
// space: O()

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
    const freq = {};

    for (const char of s) freq[char] = (freq[char] || 0) + 1;

    for (let i = 0; i < s.length; i++) 
        if (freq[s[i]] === 1) return i;

    return -1;
};
