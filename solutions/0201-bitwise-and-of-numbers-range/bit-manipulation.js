/*
 * @title: Bit Manipulation
 * @time: O(1)
 * @space: O(1)
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = (left, right) => {
    let result = 0;
    for (let i = 0; i < 31; i++) {
        const isOn = (1 << i) & left;
        const unset = right & ~(1 << i);

        if (!isOn) continue;
        else if (unset >= left && unset <= right) continue;
        else result |= 1 << i;
    }
    return result;
};

