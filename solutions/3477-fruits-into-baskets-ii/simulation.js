// time: O(n ^ 2)
// space: O(1)

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const numOfUnplacedFruits = (fruits, baskets) => {
    const n = fruits.length;
    let result = n;
    for (let i = 0; i < n; i++) {
        const fruit = fruits[i];
        for (let j = 0; j < n; j++) {
            const basket = baskets[j];
            if (basket !== null && basket >= fruit) {
                baskets[j] = null;
                result--;
                break;
            }
        }
    }
    return result;
};
