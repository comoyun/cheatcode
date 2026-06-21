// time: O(n + m)
// space: O(m)

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = (costs, coins) => {
    let max = 0;
    let result = 0;

    for (const cost of costs) max = Math.max(max, cost);

    const buckets = new Array(max + 1).fill(0);

    for (const cost of costs) buckets[cost]++;

    for (let i = 1; i < max + 1; i++) {
        const count = buckets[i];

        if (!count) continue;

        const total = count * i;

        if (coins >= total) {
            coins -= total;
            result += count;
        } else {
            result += Math.floor(coins / i);
            break;
        }
    }

    return result;
};

