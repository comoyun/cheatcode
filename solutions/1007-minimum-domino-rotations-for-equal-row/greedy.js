/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
const minDominoRotations = (tops, bottoms) => {
    const countSwaps = (target, tops, bottoms) => {
        let swaps = 0;
        for (let i = 0; i < tops.length; i++) {
            if (tops[i] === target) continue;
            if (bottoms[i] === target) {
                swaps++;
                continue;
            }
            return Infinity;
        }
        return swaps;
    };

    const candidates = [tops[0], bottoms[0]];
    let min = Infinity;

    for (const candidate of candidates)
        min = Math.min(
            min,
            countSwaps(candidate, tops, bottoms),
            countSwaps(candidate, bottoms, tops)
        );

    return min === Infinity ? -1 : min;
};
