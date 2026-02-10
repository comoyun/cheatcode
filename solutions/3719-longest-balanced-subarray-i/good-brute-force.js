// time: O(N * N)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestBalanced = nums => {
    const n = nums.length;
    let result = 0;

    const max = Math.max(...nums) + 1;
    const seen = new Array(max).fill(0);

    let windowId = 1;

    for (let i = 0; i < n; i++, windowId++) {
        let even = 0;
        let odd = 0;

        for (let j = i; j < n; j++) {
            const curr = nums[j];

            if (seen[curr] !== windowId) {
                seen[curr] = windowId;

                if (curr & 1) odd++;
                else even++;
            }

            const len = j - i + 1;

            if (even === odd) result = Math.max(result, len);
        }
    }

    return result;
};
