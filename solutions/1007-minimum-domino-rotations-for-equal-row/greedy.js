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
    const countSwaps = (target, checkTop, checkBottom) => {
        let swaps = 0;
        for (let i = 0; i < checkTop.length; i++) {
            if (checkTop[i] === target) continue;
            if (checkBottom[i] === target) {
                swaps++;
                continue;
            }
            return Infinity;
        }
        return swaps;
    };

    const candidates = [tops[0], bottoms[0]];
    let minSwaps = Infinity;

    for (const candidate of candidates) {
        const topSwaps = countSwaps(candidate, tops, bottoms),
            bottomSwaps = countSwaps(candidate, bottoms, tops);
        minSwaps = Math.min(minSwaps, topSwaps, bottomSwaps);
    }

    return minSwaps === Infinity ? -1 : minSwaps;
};
