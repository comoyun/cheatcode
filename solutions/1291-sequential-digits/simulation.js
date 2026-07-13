// time: O(1)
// space: O(1)

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = (low, high) => {
    const result = [];

    for (let i = 1; i < 10; i++) {
        let num = 0;
        for (let j = i; j < 10; j++) {
            num = num * 10 + j;
            if (num >= low && num <= high) result.push(num);
        }
    }

    return result.sort((a, b) => a - b);
};
