// time: O(1)
// space: O(1)

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = (hour, minutes) => {
    const mr = minutes / 60;
    const hr = (hour % 12) / 12 + mr / 12;

    const md = mr * 360;
    const hd = hr * 360;

    const diff = Math.abs(hd - md);

    return Math.min(diff, 360 - diff);
};

