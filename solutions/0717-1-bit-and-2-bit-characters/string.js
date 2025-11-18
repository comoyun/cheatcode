// time: O(n)
// space: O(1)

/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = bits => {
    let s = bits.join('');
    while (s.length > 1) {
        if (s.startsWith('1')) s = s.slice(2);
        else s = s.slice(1);
    }
    return s === '0';
};
