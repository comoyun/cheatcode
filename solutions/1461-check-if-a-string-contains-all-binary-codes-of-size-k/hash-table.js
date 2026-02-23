// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = (s, k) => {
    let nums = new Set();
    let left = 0;
    let right = k - 1;

    for (; right < s.length; right++) {
        const substr = s.slice(left++, right + 1);
        nums.add(parseInt(substr, 2));
    }

    nums = [...nums];
    nums.sort((a, b) => a - b);

    if (nums.length < 2 ** k) return false;
    return true;
};
