// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = nums => {
    let min = Infinity;
    let max = -Infinity;

    const gcd = (a, b) => {
        while (b) {
            const next = b;
            b = a % b;
            a = next;
        }
        return a;
    };

    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    return gcd(min, max);
};
