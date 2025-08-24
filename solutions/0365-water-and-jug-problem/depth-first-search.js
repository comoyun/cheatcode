// time: O(x * y)
// space: O(x * y)

/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
const canMeasureWater = (x, y, target) => {
    const set = new Set();
    const dfs = (a, b) => {
        const key = `${a},${b}`;
        if (set.has(key)) return false;
        if (a + b === target) return true;
        set.add(key);
        const pourXY = Math.min(y - b, a);
        const pourYX = Math.min(x - a, b);
        return (
            dfs(a, y) ||
            dfs(x, b) ||
            dfs(a, 0) ||
            dfs(0, b) ||
            dfs(a - pourXY, b + pourXY) ||
            dfs(a + pourYX, b - pourYX)
        );
    };
    return dfs(0, 0);
};
