// time: O(n * n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums => {
    const n = nums.length;

    const ones = nums.filter(x => x === 1).length;
    if (ones) return n - ones;

    const gcd = (a, b) => {
        while (b) [a, b] = [b, a % b];
        return a;
    };

    let result = Infinity;

    for (let i = 0; i < n - 1; i++) {
        const copy = [...nums];
        for (let j = i; j < n - 1; j++) {
            const a = copy[j];
            const b = copy[j + 1];
            copy[j + 1] = gcd(a, b);
            if (copy[j + 1] === 1) {
                const count = j - i + 1;
                result = Math.min(result, count + (n - 1));
                break;
            }
        }
    }

    return result === Infinity ? -1 : result;
};
