// time: O(n m log m)
// space: O(1)

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = (aliceSizes, bobSizes) => {
    let aTotal = 0;
    let bTotal = 0;

    for (const a of aliceSizes) aTotal += a;
    for (const b of bobSizes) bTotal += b;

    const diff = (bTotal - aTotal) / 2;

    bobSizes.sort((a, b) => a - b);

    const binarySearch = target => {
        let left = 0;
        let right = bobSizes.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (bobSizes[mid] === target) return true;
            else if (bobSizes[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return false;
    };

    for (const a of aliceSizes) {
        const b = a + diff;

        if (binarySearch(b)) return [a, b];
    }
};
