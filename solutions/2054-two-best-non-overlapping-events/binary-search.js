// time: O(N * log N)
// space: O(N)

/**
 * @param {number[][]} events
 * @return {number}
 */
const maxTwoEvents = events => {
    events.sort((a, b) => a[0] - b[0]);
    let result = 0;

    const max = new Array(events.length + 1).fill(0);

    for (let i = events.length - 1; i >= 0; i--)
        max[i] = Math.max(max[i + 1], events[i][2]);

    for (let i = 0; i < events.length; i++) {
        const [, aEnd, aVal] = events[i];

        let sum = aVal;
        let left = i + 1;
        let right = events.length - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (events[mid][0] > aEnd) right = mid - 1;
            else left = mid + 1;
        }

        if (left < events.length) sum += max[left];
        result = Math.max(result, sum);
    }

    return result;
};
