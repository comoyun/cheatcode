// time: O(N * K)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minBitwiseArray = nums => {
    const result = [];
    for (const num of nums) {
        if (num % 2 === 0) {
            result.push(-1);
            continue;
        }

        const bits = num.toString(2).split('');
        let lastOne = 0;
        for (let i = bits.length - 1; i >= 0; i--) {
            if (bits[i] === '1') lastOne = i;
            else break;
        }

        bits[lastOne] = '0';
        result.push(parseInt(bits.join(''), 2));
    }

    return result;
};
