// time: O(n^2)
// space: O(n^2)

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const lastRow = triangle[triangle.length - 1];
        const currentRow = [1];

        for (let j = 1; j < lastRow.length; j++)
            currentRow.push(lastRow[j - 1] + lastRow[j]);

        currentRow.push(1);
        triangle.push(currentRow);
    }

    return triangle;
};

console.log(generate(30))
