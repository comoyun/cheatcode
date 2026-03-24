// time: O(n * m)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const constructProductMatrix = grid => {
    const MOD = 12345n;
    let product = 1n;
    let zeros = 0;

    for (const row of grid) {
        for (const col of row) {
            const num = BigInt(col) % MOD;

            if (zeros > 1) return grid.map(row => row.map(_ => 0));

            if (!num) {
                zeros++;
                continue;
            }

            product *= num;
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const num = BigInt(grid[row][col]) % MOD;

            if (zeros > 1) grid[row][col] = 0;
            else if (zeros) grid[row][col] = !num ? Number(product % MOD) : 0;
            else grid[row][col] = Number((product / num) % MOD);
        }
    }

    return grid;
};
