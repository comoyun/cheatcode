/*
 * @title: Sliding Window
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    const vowels = new Set('aeiou'.split(''));
    let left = 0,
        right = 0,
        count = 0,
        max = 0;
    for (; right < s.length; right++) {
        const char = s[right],
            length = right - left + 1;
        if (vowels.has(char)) count++;
        if (length === k) {
            max = Math.max(max, count);
            if (vowels.has(s[left++])) count--;
        }
    }
    return max;
};
