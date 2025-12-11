// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
const countCoveredBuildings = (n, buildings) => {
    const rows = Array.from({ length: n + 1 }, () => [Infinity, -Infinity, 0]);
    const cols = Array.from({ length: n + 1 }, () => [Infinity, -Infinity, 0]);
    let result = 0;

    for (const [x, y] of buildings) {
        cols[x][0] = Math.min(y, cols[x][0]);
        cols[x][1] = Math.max(y, cols[x][1]);
        cols[x][2]++;

        rows[y][0] = Math.min(x, rows[y][0]);
        rows[y][1] = Math.max(x, rows[y][1]);
        rows[y][2]++;
    }

    for (const [x, y] of buildings) {
        const [rmin, rmax, rcount] = rows[y];
        const [cmin, cmax, ccount] = cols[x];

        if (x === rmin || x === rmax || y === cmin || y === cmax) continue;
        if (rcount > 1 && ccount > 1) result++;
    }

    return result;
};

