// time: O(1)
// space: O(1)

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
const findClosest = (x, y, z) => {
    const xtz = Math.abs(x - z);
    const ytz = Math.abs(y - z);
    if (xtz < ytz) return 1;
    if (xtz > ytz) return 2;
    return 0;
};

