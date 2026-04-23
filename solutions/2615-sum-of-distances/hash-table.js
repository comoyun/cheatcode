// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distance = nums => {
    const n = nums.length;
    const map = {};
    const result = [];

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        map[num] ??= {};
        map[num].arr ??= [];
        map[num].ptr = 0;
        map[num].arr.push(i);
        const len = map[num].arr.length;
        if (len > 1) map[num].arr[len - 1] += map[num].arr[len - 2];
    }

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        const obj = map[num];
        const freq = obj.arr.length;
        const before = obj.arr[obj.ptr];
        const after = obj.arr[freq - 1];
        const leftCount = obj.ptr + 1;
        const rightCount = freq - leftCount;

        result.push(i * leftCount - before + (after - before - i * rightCount));
        obj.ptr++;
    }

    return result;
};
