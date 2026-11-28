// time: O(n log n)
// space: O(n)

/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
const maximumSaleItems = (items, budget) => {
    const n = items.length;
    let result = 0;

    const factors = new Map();
    for (let i = 0; i < n; i++) {
        const f = items[i][0];
        if (!factors.has(f)) factors.set(f, []);
        factors.get(f).push(i);
    }

    const gains = new Array(n).fill(0);

    for (const [factor, group] of factors) {
        const count = group.length;

        for (let d = 1; d * d <= factor; d++) {
            if (factor % d !== 0) continue;

            const other = factor / d;

            if (factors.has(d))
                for (const idx of factors.get(d)) gains[idx] += count;
            if (other !== d && factors.has(other))
                for (const idx of factors.get(other)) gains[idx] += count;
        }
    }

    const cheapestPrice = items.reduce(
        (prev, curr) => Math.min(prev, curr[1]),
        Infinity
    );

    const ng = [];
    for (let i = 0; i < n; i++) if (gains[i] > 1) ng.push([i, gains[i]]);

    ng.sort((a, b) => items[a[0]][1] - items[b[0]][1] || b[1] - a[1]);

    for (const [idx, gain] of ng) {
        const free = gain - 1;
        const price = items[idx][1];

        if (price >= 2 * cheapestPrice) break;
        if (price > budget) break;

        const k = Math.min(free, Math.floor(budget / price));
        budget -= k * price;
        result += 2 * k;
    }

    result += Math.floor(budget / cheapestPrice);
    return result;
};
