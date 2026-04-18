// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const mirrorDistance = n => {
    const org = n;
    let rev = 0;

    while (n) {
        rev *= 10;
        rev += n % 10;
        n = Math.floor(n / 10);
    }

    return Math.abs(org - rev);
};
