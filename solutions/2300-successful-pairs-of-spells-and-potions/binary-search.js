/*
 * @title: Binary Search + Sorting
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
    potions.sort((a, b) => a - b);

    const binarySearch = num => {
        let left = 0,
            right = potions.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const product = num * potions[mid];
            if (product < success) left = mid + 1;
            else right = mid - 1;
        }
        return left;
    };

    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        const left = binarySearch(spell);
        spells[i] = potions.length - left;
    }

    return spells;
};
