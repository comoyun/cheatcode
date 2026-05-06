// time: O(m * n^2)
// space: O(m * n)

/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
const rotateTheBox = boxGrid => {
    const n = boxGrid.length;
    const m = boxGrid[0].length;
    const result = Array.from({ length: m }, () => new Array(n));

    for (let row = 0; row < n; row++)
        for (let col = 0; col < m; col++) result[col][row] = boxGrid[row][col];
    for (const row of result) row.reverse();

    for (let row = 1; row < m; row++) {
        for (let col = 0; col < n; col++) {
            let curr = row;
            while (
                curr > 0 &&
                result[curr][col] === '.' &&
                result[curr - 1][col] === '#'
            ) {
                result[curr - 1][col] = '.';
                result[curr][col] = '#';
                curr--;
            }
        }
    }

    return result;
};

