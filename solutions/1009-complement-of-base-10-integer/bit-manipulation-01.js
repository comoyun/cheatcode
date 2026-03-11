// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = n => {
    const bin = n.toString(2);
    const result = [];
    let seenOne = false;

    for (const bit of bin) {
        if (!seenOne) {
            if (bit === '1') continue;
            if (bit === '0') seenOne = true;
        }

        result.push(bit === '1' ? '0' : '1');
    }

    return result.length ? parseInt(result.join(''), 2) : 0;
};
