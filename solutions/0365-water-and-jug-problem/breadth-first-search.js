// time: O(x * y)
// space: O(x * y)

/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
const canMeasureWater = (x, y, target) => {
    const queue = [[0, 0]];
    const seen = new Set();

    while (queue.length) {
        const [a, b] = queue.shift();
        const key = `${a},${b}`;
        if (seen.has(key)) continue;
        seen.add(key);

        if (a + b === target) return true;

        queue.push([x, b]);
        queue.push([a, y]);
        queue.push([0, b]);
        queue.push([a, 0]);

        const pourXY = Math.min(a, y - b);
        queue.push([a - pourXY, b + pourXY]);

        const pourYX = Math.min(b, x - a);
        queue.push([a + pourYX, b - pourYX]);
    }

    return false;
};

