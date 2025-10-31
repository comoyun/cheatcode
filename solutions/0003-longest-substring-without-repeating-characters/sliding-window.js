// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    const set = new Set();
    let left = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        while (set.has(char)) {
            let rem = s[left++];
            set.delete(rem);
        }
        set.add(char);
        result = Math.max(result, i - left + 1);
    }

    return result;
};

