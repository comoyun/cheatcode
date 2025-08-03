// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    s = s.split('');

    for (let i = 0; i < s.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }

    return s.join('');
};
