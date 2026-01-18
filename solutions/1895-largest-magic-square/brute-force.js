// time: O(N ^ 4)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestMagicSquare = grid => {
    const n = grid.length;
    const m = grid[0].length;
    let result = 1;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            let r = row + 1;
            let c = col + 1;

            while (r < n && c < m) {
                let lock = null;
                let wrong = false;

                for (let i = row; i <= r; i++) {
                    let sum = 0;
                    for (let j = col; j <= c; j++) sum += grid[i][j];
                    if (lock === null) lock = sum;
                    if (lock !== sum) {
                        wrong = true;
                        break;
                    }
                }

                if (wrong) {
                    r++;
                    c++;
                    continue;
                }

                for (let i = col; i <= c; i++) {
                    let sum = 0;
                    for (let j = row; j <= r; j++) sum += grid[j][i];
                    if (lock !== sum) {
                        wrong = true;
                        break;
                    }
                }

                if (wrong) {
                    r++;
                    c++;
                    continue;
                }

                let a = row;
                let b = col;
                let sum = 0;

                while (a <= r) {
                    sum += grid[a][b];
                    a++;
                    b++;
                }

                if (lock !== sum) {
                    r++;
                    c++;
                    continue;
                }

                a = row;
                b = c;
                sum = 0;

                while (b >= col) {
                    sum += grid[a][b];
                    a++;
                    b--;
                }

                if (lock !== sum) {
                    r++;
                    c++;
                    continue;
                }

                result = Math.max(result, r - row + 1);

                r++;
                c++;
            }
        }
    }

    return result;
};
