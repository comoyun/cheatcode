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

    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];

        if (curr - prev >= 2) return false;
    }

    return true;
};
