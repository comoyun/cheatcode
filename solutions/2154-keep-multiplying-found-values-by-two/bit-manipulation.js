// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
    let mask = 0;

    for (const n of nums) {
        if (n % original !== 0) continue;
        const p = Math.log2(n / original);
        if (p === Math.floor(p)) mask |= 1 << p;
    }

    let k = 0;
    while (mask & (1 << k)) k++;
    return original * (1 << k);
};
