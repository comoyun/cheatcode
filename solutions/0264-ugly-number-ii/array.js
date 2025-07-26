// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = n => {
    let result = 1;
    const nums = [result];

    let i2 = 0;
    let i3 = 0;
    let i5 = 0;

    while (nums.length < n) {
        const a = nums[i2] * 2;
        const b = nums[i3] * 3;
        const c = nums[i5] * 5;

        result = Math.min(a, b, c);

        if (a === result) i2++;
        if (b === result) i3++;
        if (c === result) i5++;

        nums.push(result);
    }

    return result;
};
