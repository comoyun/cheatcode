// time: O(N)
// space: O(1)

/**
 * @param {string} customers
 * @return {number}
 */
const bestClosingTime = customers => {
    customers += 'Y';

    let present = 0;
    let absent = 0;
    let min = Infinity;
    let result = Infinity;

    for (const customer of customers) if (customer === 'Y') present++;
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];
        let penalty = absent + present;

        if (customer === 'Y') present--;
        else absent++;

        if (penalty < min) {
            min = penalty;
            result = i;
        }
    }

    return result;
};
