// time: O(n)
// space: O(n)

/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
const maxFreeTime = (eventTime, startTime, endTime) => {
    const n = startTime.length;
    const gaps = [];
    let lastEnd = 0;
    for (let i = 0; i < n; i++) {
        gaps.push(startTime[i] - lastEnd);
        lastEnd = endTime[i];
    }
    gaps.push(eventTime - lastEnd);

    const prefixLtr = [...gaps];
    const prefixRtl = [...gaps];
    for (let i = 1; i < prefixLtr.length; i++)
        prefixLtr[i] = Math.max(prefixLtr[i], prefixLtr[i - 1]);
    for (let i = prefixRtl.length - 2; i >= 0; i--)
        prefixRtl[i] = Math.max(prefixRtl[i], prefixRtl[i + 1]);

    let result = 0;
    for (let i = 0; i < n; i++) {
        const len = endTime[i] - startTime[i];
        const before = gaps[i];
        const after = gaps[i + 1];

        const canLeft = i >= 1 && prefixLtr[i - 1] >= len;
        const canRight = i + 2 < gaps.length && prefixRtl[i + 2] >= len;

        if (canLeft || canRight)
            result = Math.max(result, before + len + after);
        else result = Math.max(result, before + after);
    }

    return result;
};

