// time: O(N)
// space: O(1)

/**
 * @param {number[]} prices
 * @return {number}
 */
const getDescentPeriods = prices => {
    let last = prices[0];
    let count = 0;
    let result = 0;

    const getPeriods = count => (count * (count + 1)) / 2;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (last - price === 1) {
            count++;
        } else {
            result += getPeriods(count);
            count = 1;
        }

        last = price;
    }

    return result + getPeriods(count);
};
