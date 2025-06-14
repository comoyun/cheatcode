/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
const minMaxDifference = num => {
    const processNumber = (n, skipDigit, isMax) => {
        let pos = Math.floor(Math.log10(n));
        let chosen = null;
        let result = n;

        while (pos >= 0) {
            const pow = 10 ** pos;
            const digit = Math.floor(result / pow) % 10;
            pos--;

            if (digit === skipDigit) continue;
            if (chosen === null) chosen = digit;
            if (digit === chosen)
                result += isMax ? (9 - digit) * pow : -digit * pow;
        }
        return result;
    };

    const maxNum = processNumber(num, 9, true);
    const minNum = processNumber(num, 0, false);

    return maxNum - minNum;
};
