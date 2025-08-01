// time: o(n^2)
// space: o(n^2)

/**
 * @param {number} numrows
 * @return {number[][]}
 */
const generate = numrows => {
    if (numrows === 0) return [];
    if (numrows === 1) return [[1]];

    const triangle = generate(numrows - 1);
    const last = triangle[triangle.length - 1];
    const row = [1];

    for (let i = 1; i < last.length; i++) 
        row.push(last[i - 1] + last[i]);

    row.push(1);
    triangle.push(row);

    return triangle;
};

