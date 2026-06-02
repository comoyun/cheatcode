// time: O(n + m)
// space: O(1)

/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
const earliestFinishTime = (
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
) => {
    const earliest = (start, end, offset) => {
        const n = start.length;
        let result = Infinity;

        for (let i = 0; i < n; i++) {
            const s = Math.max(start[i], offset);
            const d = end[i];

            result = Math.min(result, s + d);
        }

        return result;
    };

    return Math.min(
        earliest(
            waterStartTime,
            waterDuration,
            earliest(landStartTime, landDuration, 0)
        ),
        earliest(
            landStartTime,
            landDuration,
            earliest(waterStartTime, waterDuration, 0)
        )
    );
};
