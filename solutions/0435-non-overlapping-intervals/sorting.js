/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = intervals => {
    let res = 0;
    intervals.sort((a, b) => a[0] - b[0]);
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start >= prevEnd) {
            prevEnd = end;
            continue;
        }
        res++;
        prevEnd = Math.min(prevEnd, end);
    }

    return res;
};
