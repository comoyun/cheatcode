// time: O(log n)
// space: O(1)

/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = num => {
    if (num === 0) return '0';
    const isNegative = num < 0;
    num = Math.abs(num);
    const result = [];
    while (num) {
        result.push(num % 7);
        num = Math.floor(num / 7);
    }
    return (isNegative ? '-' : '') + result.reverse().join('');
};
