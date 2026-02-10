// time: O(N * N)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestBalanced = nums => {
    const n = nums.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        let even = 0;
        let odd = 0;
        const map = {};

        for (let j = i; j < n; j++) {
            const curr = nums[j];
            const len = j - i + 1;

            map[curr] ??= 0;

            if (map[curr] === 0) {
                if (curr & 1) odd++;
                else even++;
            }

            map[curr]++;

            if (even === odd) result = Math.max(result, len);
        }
    }

    return result;
};
