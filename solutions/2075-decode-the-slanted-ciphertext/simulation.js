// time: O(n)
// space: O(n)

/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
const decodeCiphertext = (encodedText, rows) => {
    const result = [];
    const cols = Math.floor(encodedText.length / rows);
    const arr = Array.from({ length: rows }, () => new Array(cols).fill(''));

    for (let row = 0; row < rows; row++)
        for (let col = 0; col < cols; col++)
            arr[row][col] = encodedText[cols * row + col];

    let row = 0;
    let col = 0;
    let t = 0;
    while (col < cols) {
        result.push(arr[row][col]);

        row++;
        col++;

        if (row === rows) {
            row = 0;
            col = ++t;
        }
    }

    while (result.at(-1) === ' ') result.pop();
    return result.join('');
};

