/*
 * @title: Interval
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
const findKDistantIndices = (nums, key, k) => {
    const intervals = [];
    const result = [];

    const indices = nums.reduce((acc, curr, idx) => {
        if (curr === key) acc.push(idx);
        return acc;
    }, []);

    for (const idx of indices) {
        let left = idx - k;
        left = Math.max(left, 0);
        let right = idx + k;
        right = Math.min(right, nums.length - 1);
        intervals.push([left, right]);
    }

    const merged = [];

    for (const [start, end] of intervals) {
        const len = merged.length;
        if (!len || merged[len - 1][1] < start) {
            merged.push([start, end]);
            continue;
        }
        merged[len - 1][1] = Math.max(merged[len - 1][1], end);
    }

    for (const [start, end] of merged)
        for (let i = start; i <= end; i++) result.push(i);

    return result;
};

