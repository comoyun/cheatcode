// time: O(n * m)
// space: O(n * m)

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numberOfSubmatrices = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const matrix = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => [0, 0])
    );
    let result = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const curr = grid[row][col];
            if (curr === 'X') matrix[row][col][0]++;
            if (curr === 'Y') matrix[row][col][1]++;
        }
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const [lx, ly] = col - 1 >= 0 ? matrix[row][col - 1] : [0, 0];

            matrix[row][col][0] += lx;
            matrix[row][col][1] += ly;
        }
    }

    for (let col = 0; col < m; col++) {
        for (let row = 1; row < n; row++) {
            const [tx, ty] = matrix[row - 1][col];

            matrix[row][col][0] += tx;
            matrix[row][col][1] += ty;
        }
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            let [x, y] = matrix[row][col];

            if (x && x === y) result++;
        }
    }

    return result;
};
