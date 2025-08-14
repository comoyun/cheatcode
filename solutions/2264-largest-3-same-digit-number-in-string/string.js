// time: O(n)
// space: O(1)

/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = num => {
    const good = [
        '999',
        '888',
        '777',
        '666',
        '555',
        '444',
        '333',
        '222',
        '111',
        '000',
    ];
    for (const g of good) if (num.includes(g)) return g;
    return '';
};
