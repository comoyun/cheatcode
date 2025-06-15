/*
 * @title: Math + Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
const maxDiff = num => {
    const allDigitsSame = n => {
        const d = n % 10;
        while (n) {
            if (n % 10 !== d) return false;
            n = Math.floor(n / 10);
        }
        return true;
    };

    const mag = Math.floor(Math.log10(num));
    const firstDigit = Math.floor(num / 10 ** mag) % 10;

    if (allDigitsSame(num)) {
        const ones = parseInt('1'.repeat(mag + 1), 10);
        return 10 ** (mag + 1) - 1 - ones;
    }

    const getMax = () => {
        let res = num;
        let chosen = null;
        for (let pos = mag; pos >= 0; pos--) {
            const pow = 10 ** pos;
            const digit = Math.floor(num / pow) % 10;
            if (digit === 9) continue;
            if (chosen === null) chosen = digit;
            if (digit === chosen) res += (9 - digit) * pow;
        }
        return res;
    };

    const getMin = () => {
        let res1 = num;
        let res2 = num;
        let chosen = null;

        for (let pos = mag - 1; pos >= 0; pos--) {
            const pow = 10 ** pos;
            const digit = Math.floor(num / pow) % 10;
            if (digit === 0) continue;
            if (chosen === null && digit !== firstDigit) chosen = digit;
            if (digit === chosen) res1 -= digit * pow;
        }

        chosen = null;
        for (let pos = mag; pos >= 0; pos--) {
            const pow = 10 ** pos;
            const digit = Math.floor(num / pow) % 10;
            if (digit === 0) continue;
            if (chosen === null) chosen = digit;
            if (digit === chosen) res2 -= (digit - 1) * pow;
        }

        return Math.min(res1, res2);
    };

    return getMax() - getMin();
};
