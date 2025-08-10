// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = n => {
    const powers = [];
    const sort = num => {
        const result = [];
        while (num) {
            result.push(num % 10);
            num = Math.floor(num / 10);
        }
        result.sort((a, b) => a - b);
        return result;
    };
    for (let i = 0; i < 31; i++) {
        const sorted = sort(2 ** i);
        const str = sorted.toString();
        powers.push(str);
    }

    return powers.includes(sort(n).toString());
};
