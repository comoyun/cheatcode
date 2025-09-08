// time: O(n log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = n => {
    const isNoZero = a => {
        while (a) {
            const digit = a % 10;
            if (digit === 0) return false;
            a = Math.floor(a / 10);
        }

        return true;
    };

    for (let a = 1; a < n; a++) {
        const b = n - a;
        if (isNoZero(a) && isNoZero(b)) return [a, b];
    }

    return [-1, -1];
};
