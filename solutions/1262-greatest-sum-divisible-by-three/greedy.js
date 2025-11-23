// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumDivThree = nums => {
    let sum = 0;

    let r1a = Infinity,
        r1b = Infinity;
    let r2a = Infinity,
        r2b = Infinity;

    for (const num of nums) {
        sum += num;

        const r = num % 3;
        if (r === 1) {
            if (num < r1a) [r1b, r1a] = [r1a, num];
            else if (num < r1b) r1b = num;
        } else if (r === 2) {
            if (num < r2a) [r2b, r2a] = [r2a, num];
            else if (num < r2b) r2b = num;
        }
    }

    const mod = sum % 3;

    if (mod === 1) {
        const remove1 = r1a < Infinity ? sum - r1a : 0;
        const remove2 = r2a < Infinity && r2b < Infinity ? sum - r2a - r2b : 0;
        return Math.max(remove1, remove2);
    }

    if (mod === 2) {
        const remove1 = r2a < Infinity ? sum - r2a : 0;
        const remove2 = r1a < Infinity && r1b < Infinity ? sum - r1a - r1b : 0;
        return Math.max(remove1, remove2);
    }

    return sum;
};

