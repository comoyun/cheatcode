// time: O(n)
// space: O(1)

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
    let result = 0;
    let end = 0;

    for (const t of timeSeries) {
        if (t >= end) result += duration;
        else result += duration - (end - t);
        end = t + duration;
    }

    return result;
};
