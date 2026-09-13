// time: O(n^4)
// space: O(n^2)

/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
const largestOverlap = (img1, img2) => {
    const n = img1.length;
    const N = 3 * n - 2;
    let result = 0;

    const matrix = Array.from({ length: N }, () => new Array(N).fill(0));

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const offset = n - 1;
            matrix[offset + row][offset + col] = img2[row][col];
        }
    }

    const countOverlap = (offsetRow, offsetCol) => {
        let overlap = 0;
        for (let r = 0; r < n; r++)
            for (let c = 0; c < n; c++)
                if (matrix[offsetRow + r][offsetCol + c] && img1[r][c])
                    overlap++;
        return overlap;
    };

    for (let row = 0; row <= N - n; row++)
        for (let col = 0; col <= N - n; col++)
            result = Math.max(result, countOverlap(row, col));

    return result;
};

/*

  ***
  ***
  ***..
    ...
    ...

    ...
    ...
    ..***
      ***
      ***


  $$$$$$$
  $$$$$$$
  $$...$$
  $$...$$ R = C = 3n - 2
  $$...$$ 
  $$$$$$$
  $$$$$$$

*/

