// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
const smallestNumber = (n, t) => {
    const digitProduct = num => {
        let product = 1;
        while (num) {
            const digit = num % 10;
            product *= digit;
            num = Math.floor(num / 10);
        }
        return product;
    }

    for (let i = n; i < n + 10; i++)
        if (digitProduct(i) % t === 0) return i;
};
