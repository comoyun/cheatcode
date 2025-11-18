// time: O(n)
// space: O(1)

/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = bits => {
    let i = 0;
    while (i < bits.length - 1) i += bits[i] === 1 ? 2 : 1;
    return i === bits.length - 1;
};
