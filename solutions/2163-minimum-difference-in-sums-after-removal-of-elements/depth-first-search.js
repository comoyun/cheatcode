// time: O(2^n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDifference = nums => {
    /* WARNING: This gives TLE */

    const n = nums.length;
    const seqLen = n / 3;
    let result = Infinity;
    let len = 0;

    const dfs = idx => {
        if (len === seqLen) {
            let leftSum = 0,
                rightSum = 0,
                count = 0;
            for (let i = 0; i < n; i++) {
                if (nums[i] === null) continue;
                if (count < seqLen) leftSum += nums[i];
                else rightSum += nums[i];
                count++;
            }
            result = Math.min(result, leftSum - rightSum);
            return;
        }
        if (idx >= n) return;

        const prev = nums[idx];

        nums[idx] = null;
        len++;
        dfs(idx + 1);
        len--;
        nums[idx] = prev;

        dfs(idx + 1);
    };
    dfs(0);

    return result;
};
