// time: O(fruits * sqrt(n))
// space: O(sqrt(n))

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const numOfUnplacedFruits = (fruits, baskets) => {
    const n = fruits.length;
    const section = Math.floor(Math.sqrt(n));
    const groups = new Array(Math.ceil(n / section)).fill(0);
    let result = n;

    for (let i = 0; i < n; i++) {
        const basket = baskets[i];
        const idx = Math.floor(i / section);
        groups[idx] = Math.max(groups[idx], basket);
    }

    for (const fruit of fruits) {
        for (let i = 0; i < groups.length; i++) {
            if (groups[i] < fruit) continue;

            groups[i] = 0;
            result--;

            const start = i * section;
            const end = start + section;
            for (let j = start; j < end && j < n; j++) {
                if (baskets[j] && baskets[j] >= fruit) {
                    baskets[j] = 0;
                    break;
                }
            }
            for (let j = start; j < end && j < n; j++)
                groups[i] = Math.max(groups[i], baskets[j]);

            break;
        }
    }

    return result;
};
