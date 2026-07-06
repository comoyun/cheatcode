// time: O(n log n)
// space: O(1)

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = intervals => {
    let result = intervals.length;
    let maxRight = 0;
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    for (const [_, right] of intervals) {
        if (right <= maxRight) result--;
        maxRight = Math.max(maxRight, right);
    }

    return result;
};
