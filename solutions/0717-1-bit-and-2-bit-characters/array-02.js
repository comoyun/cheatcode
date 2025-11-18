// time: O(n)
// space: O(1)

/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = bits => {
    let i = 0;
    while (i < bits.length) {
        if (bits[i]) {
            i += 2;
            if (i >= bits.length) return false;
        } else {
            i++;
        }
    }

    return true;
};
