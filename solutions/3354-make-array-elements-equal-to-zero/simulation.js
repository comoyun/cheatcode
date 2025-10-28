// time: O(k * n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const countValidSelections = nums => {
    let result = 0;
    const indices = [];

    const isPossible = (arr, idx, v) => {
        while (idx >= 0 && idx < nums.length) {
            if (arr[idx] > 0) {
                arr[idx]--;
                v = -v;
            }
            idx += v;
        }

        if (arr.every(el => el === 0)) return true;
        return false;
    };

    for (let i = 0; i < nums.length; i++) if (nums[i] === 0) indices.push(i);

    while (indices.length) {
        const curr = indices.shift();

        if (isPossible([...nums], curr, 1)) result++;
        if (isPossible([...nums], curr, -1)) result++;
    }

    return result;
};
