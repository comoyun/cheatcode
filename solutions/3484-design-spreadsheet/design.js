// time: O()
// space: O()

class Spreadsheet {
    /**
     * @param {number} rows
     */
    constructor(rows) {
        this.cells = Array.from({ length: rows }, () => new Array(26).fill(0));
    }

    getId(char) {
        return char.charCodeAt(0) - 65;
    }

    /**
     * @param {string} cell
     * @param {number} value
     * @return {void}
     */
    setCell(cell, value) {
        const letter = cell[0];
        const row = +cell.slice(1) - 1;
        this.cells[row][this.getId(letter)] = value;
    }

    /**
     * @param {string} cell
     * @return {void}
     */
    resetCell(cell) {
        const letter = cell[0];
        const row = +cell.slice(1) - 1;
        this.cells[row][this.getId(letter)] = 0;
    }

    /**
     * @param {string} formula
     * @return {number}
     */
    getValue(formula) {
        const plusIdx = formula.indexOf('+');

        let a = formula.slice(1, plusIdx);
        let b = formula.slice(plusIdx + 1);

        if (isNaN(a)) {
            const letter = formula[1];
            const row = +formula.slice(2, plusIdx) - 1;
            a = this.cells[row][this.getId(letter)];
        }
        if (isNaN(b)) {
            const letter = formula[plusIdx + 1];
            const row = +formula.slice(plusIdx + 2) - 1;
            b = this.cells[row][this.getId(letter)];
        }

        return +a + +b;
    }
}

var obj = new Spreadsheet(458);
obj.setCell('A5', 3);
console.log(obj.getValue('=3138+15425'));

