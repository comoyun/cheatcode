// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const rotatedDigits = n => {
    const good = [0, 1, 8, 2, 5, 6, 9];
    const diff = new Set([2, 5, 6, 9]);

    let count = 0;
    const stack = [[0, false]];

    while (stack.length) {
        const [num, isGood] = stack.pop();

        if (num > n) continue;
        if (isGood && num !== 0) count++;

        for (const d of good) {
            if (num === 0 && d === 0) continue;
            const next = num * 10 + d;

            if (next > n) continue;

            stack.push([next, isGood || diff.has(d)]);
        }
    }

    return count;
};

