// time: O(n)
// space: O(n)

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = (aliceSizes, bobSizes) => {
    const set = new Set(bobSizes);
    let aTotal = 0;
    let bTotal = 0;

    for (const a of aliceSizes) aTotal += a;
    for (const b of bobSizes) bTotal += b;

    for (const a of aliceSizes) {
        const b = a + bTotal;
        const aT = aTotal - a;
        const half = (b - aT) / 2;

        if (set.has(half)) return [a, half];
    }
};

