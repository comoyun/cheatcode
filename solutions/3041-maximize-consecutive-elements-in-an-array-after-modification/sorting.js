// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSelectedElements = nums => {
    let result = 0;
    const n = nums.length;
    let idx = 0;
    let length = 0;
    let prev = 0;
    let prevNum = -1;
    let lastCount = 0;
    let seg = 0;
    const counts = new Array(n).fill(0);
    nums.sort((a, b) => a - b);

    while (idx < n) {
        const num = nums[idx];
        let count = 0;

        while (idx + count < n && nums[idx + count] === num) count++;

        lastCount = count;

        if (length === 0 && prev !== -1 && num - (nums[prevNum] + 1) === 1)
            length += counts[prevNum];

        length++;
        seg++;

        if (idx + count < n) {
            const next = nums[idx + count];
            const diff = next - num;

            if (diff === 1) {
                prev = Math.max(prev, count);
            } else if (diff === 2 && (count > 1 || prev > 1)) {
                prev = 1;
                length++;
                seg = 0;
            } else {
                result = Math.max(
                    result,
                    length + (prev > 1 || count > 1 ? 1 : 0)
                );
                counts[idx] = seg;
                prev = 0;
                length = 0;
                seg = 0;
            }
        }

        prevNum = idx;
        idx += count;
        result = Math.max(result, length);
    }

    result = Math.max(result, length + (prev > 1 || lastCount > 1 ? 1 : 0));

    return result;
};
