// time: O(n log n)
// space: O(n)

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval = intervals => {
    intervals = intervals.map((interval, idx) => [...interval, idx]);

    intervals.sort((a, b) => a[0] - b[0]);

    const n = intervals.length;
    const result = new Array(n).fill(-1);

    const binarySearch = time => {
        let left = 0;
        let right = n - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (intervals[mid][0] >= time) right = mid - 1;
            else left = mid + 1;
        }

        return left;
    };

    for (let i = 0; i < n; i++) {
        const interval = intervals[i];
        const [start, end, idx] = interval;

        const right = binarySearch(end);

        if (right === n) continue;

        result[idx] = intervals[right][2];
    }

    return result;
};

