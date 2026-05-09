// time: O(n * m)
// space: O(min(n, m))

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

const rotateGrid = (grid, k) => {
    const n = grid.length;
    const m = grid[0].length;

    const init = layer => {
        let row = layer;
        let col = layer;

        return val => {
            const old = grid[row][col];

            if (val !== undefined) grid[row][col] = val;

            if (row === layer && col < m - layer - 1) {
                col++;
            } else if (col === m - layer - 1 && row < n - layer - 1) {
                row++;
            } else if (row === n - layer - 1 && col > layer) {
                col--;
            } else if (col === layer) {
                row--;
            }

            if (row < layer) {
                row = layer;
                col = layer + 1;
            }

            return old;
        };
    };

    const rotate = layer => {
        const height = n - 2 * layer;
        const width = m - 2 * layer;
        const length = width * 2 + height * 2 - 4;
        const nk = k % length;
        const bak = new Array(nk);

        const read = init(layer);
        const write = init(layer);

        for (let i = 0; i < length - nk; i++) {
            read();
            write();
        }

        for (let i = 0; i < nk; i++) bak[i] = read();
        for (let i = 0; i < length - nk; i++) write(read());
        for (let i = 0; i < nk; i++) write(bak[i]);
    };

    for (let layer = 0; layer < Math.min(n, m) / 2; layer++) rotate(layer);

    return grid;
};

