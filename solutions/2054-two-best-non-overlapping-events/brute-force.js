// time: O(N * N)
// space: O(1)

/**
 * @param {number[][]} events
 * @return {number}
 */
const maxTwoEvents = events => {
    // WARNING: This solution gives TLE

    events.sort((a, b) => b[2] - a[2]);

    let result = 0;

    for (let i = 0; i < events.length; i++) {
        const [aStart, aEnd, aVal] = events[i];
        let sum = aVal;
        for (let j = i + 1; j < events.length; j++) {
            const [bStart, bEnd, bVal] = events[j];
            if (aEnd >= bStart && aStart <= bEnd) continue;
            sum += bVal;
            break;
        }
        result = Math.max(result, sum);
    }

    return result;
};

