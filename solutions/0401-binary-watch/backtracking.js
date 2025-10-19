// time: O(1)
// space: O(1)

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = turnedOn => {
    const result = [];
    for (let h = 0; h < 12; h++)
        for (let m = 0; m < 60; m++)
            if (
                (h.toString(2) + m.toString(2)).replace(/0/g, '').length ===
                turnedOn
            )
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
    return result;
};
