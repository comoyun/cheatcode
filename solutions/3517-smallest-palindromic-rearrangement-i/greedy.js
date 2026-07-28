// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const smallestPalindrome = s => {
    const n = s.length;
    let left = 0;
    let right = n - 1;
    let repeatChar = null;
    const freq = new Array(26).fill(0);
    const result = new Array(n).fill('');

    for (const char of s) {
        const code = char.charCodeAt(0);
        freq[code - 97]++;
    }

    for (let i = 0; i < freq.length; i++) {
        let count = freq[i];
        const char = String.fromCharCode(i + 97);

        if (count & 1) {
            repeatChar = char;
            count -= 1;
        }

        while (count) {
            result[left++] = char;
            result[right--] = char;
            count -= 2;
        }
    }

    if (repeatChar !== null) result[left] = repeatChar;

    return result.join('');
};
