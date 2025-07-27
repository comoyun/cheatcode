// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    if (n <= 0) return false;

    const buffer = new ArrayBuffer(8);
    const view = new DataView(buffer);

    view.setFloat64(0, n);

    const high = view.getUint32(0);
    const low = view.getUint32(4);

    const mantissaHigh = high & 0xfffff;
    const mantissaLow = low;

    return mantissaHigh === 0 && mantissaLow === 0;
};

