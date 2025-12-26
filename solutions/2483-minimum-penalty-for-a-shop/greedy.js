// time: O(N)
// space: O(1)

/**
 * @param {string} customers
 * @return {number}
 */
const bestClosingTime = customers => {
    let score = 0;
    let min = 0;
    let result = 0;

    for (let i = 0; i < customers.length; i++) {
        score += customers[i] === 'Y' ? -1 : 1;

        if (score < min) {
            min = score;
            result = i + 1;
        }
    }

    return result;
};
