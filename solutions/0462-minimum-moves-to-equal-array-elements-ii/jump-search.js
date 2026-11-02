// time: O(n log m)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = nums => {
    let min = Infinity;
    let max = -Infinity;
    for (const num of nums) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const countMoves = target => {
        let count = 0;
        for (const num of nums) count += Math.abs(target - num);
        return count;
    };

    let step = Math.max(1, Math.floor(Math.sqrt(max - min)));
    let target = min;
    let cost = countMoves(target);

    while (true) {
        while (target + step <= max) {
            const next = countMoves(target + step);
            if (next >= cost) break;
            target += step;
            cost = next;
        }

        if (step === 1) return cost;
        step = Math.floor(Math.sqrt(step));
    }
};

