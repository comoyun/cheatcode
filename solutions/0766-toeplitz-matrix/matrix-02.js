// time: O(nm)
// space: O(1)

const isToeplitzMatrix = matrix => {
    const n = matrix.length;
    const m = matrix[0].length;

    for (let row = 1; row < n; row++)
        for (let col = 1; col < m; col++)
            if (matrix[row - 1][col - 1] !== matrix[row][col]) return false;

    return true;
};

