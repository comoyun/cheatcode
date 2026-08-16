// time: O(n)
// space: O(1)

/**
 * @param {number[]} stones
 * @return {boolean}
 */
const stoneGameIX = stones => {
    const mod = [0, 0, 0];

    for (const stone of stones) mod[stone % 3]++;
    if (mod[0] % 2 === 0) return mod[1] > 0 && mod[2] > 0;

    return Math.abs(mod[1] - mod[2]) > 2;
};
