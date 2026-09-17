// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const minSumOfLengths = (arr, target) => {
    const n = arr.length;
    const intervals = [];
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = Infinity;

    for (; right < n; right++) {
        sum += arr[right];

        while (sum > target) sum -= arr[left++];

        if (sum === target) intervals.push([left, right]);
    }

    const m = intervals.length;
    if (m === 0) return -1;

    const getLength = interval => interval[1] - interval[0] + 1;
    const findIdx = (start, target) => {
        let left = start + 1;
        let right = m - 1;
        let result = -1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (intervals[mid][0] > target) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    };

    const suffix = new Array(m).fill(Infinity);
    suffix[m - 1] = getLength(intervals[m - 1]);

    for (let i = m - 2; i >= 0; i--)
        suffix[i] = Math.min(suffix[i + 1], getLength(intervals[i]));

    for (let i = 0; i < m; i++) {
        const idx = findIdx(i, intervals[i][1]);
        if (idx === -1) break;
        result = Math.min(result, getLength(intervals[i]) + suffix[idx]);
    }

    return result === Infinity ? -1 : result;
};

