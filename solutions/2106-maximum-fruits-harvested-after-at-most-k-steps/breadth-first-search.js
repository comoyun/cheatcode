// time: O(k * f)
// space: O(k * f)

/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
const maxTotalFruits = (fruits, startPos, k) => {
    /* WARNING: This solution gives TLE */
    const map = {};
    for (const [pos, amt] of fruits) map[pos] = amt;

    const queue = [[startPos, k, 0, new Set()]];
    const min = startPos - k;
    const max = startPos + k;
    let result = 0;

    while (queue.length) {
        const [pos, steps, collected, tracker] = queue.shift();

        const fs = map[pos] && !tracker.has(pos) ? map[pos] : 0;
        const total = collected + fs;
        tracker.add(pos);
        result = Math.max(result, total);

        if (steps <= 0) continue;

        const left = pos - 1;
        const right = pos + 1;

        if (left >= min) queue.push([left, steps - 1, total, new Set(tracker)]);
        if (right <= max)
            queue.push([right, steps - 1, total, new Set(tracker)]);
    }

    return result;
};
