// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSelectedElements = nums => {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let result = 0;
    let prevVal = -Infinity;
    let e0 = 0;
    let e1 = 0;
    let idx = 0;

    while (idx < n) {
        const num = nums[idx];
        let count = 0;

        while (idx + count < n && nums[idx + count] === num) count++;

        const diff = num - prevVal;
        let endBefore = 0;
        let endAt = 0;

        if (diff === 1) {
            endBefore = e0;
            endAt = e1;
        } else if (diff === 2) {
            endBefore = e1;
        }

        const stay = endBefore + 1;
        const up = Math.max(endAt + 1, count > 1 ? stay + 1 : 1);

        e0 = stay;
        e1 = up;
        prevVal = num;
        result = Math.max(result, stay, up);
        idx += count;
    }

    return result;
};
