/*
 * @title: Brute Force
 * @time: O(n^3)
 * @space: O(n)
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = digits => {
    let result = [];

    for (let i = 0; i < digits.length; i++) {
        const a = digits[i];
        if (!a) continue;
        for (let j = 0; j < digits.length; j++) {
            if (j === i) continue;
            const b = digits[j];
            for (let k = 0; k < digits.length; k++) {
                if (k === j || k === i) continue;
                const c = digits[k];
                if (c & 1) continue;
                const num = a * 100 + b * 10 + c;
                result.push(num);
            }
        }
    }

    result = [...new Set(result)]
    result.sort((a, b) => a - b);
    return result;
};
