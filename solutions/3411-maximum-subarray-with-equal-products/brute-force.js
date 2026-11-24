// time: O(n^2 log m)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxLength = nums => {
    const n = nums.length;
    let result = 0;

    const gcd = (a, b) => {
        while (b) {
            const temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    };

    const lcm = (a, b) => (a * b) / gcd(a, b);

    for (let i = 0; i < n - 1; i++) {
        let prod = nums[i];
        let g = prod;
        let l = prod;
        for (let j = i + 1; j < n; j++) {
            const num = nums[j];
            prod *= num;
            g = gcd(g, num);
            l = lcm(l, num);

            if (prod > l * g) break;
            if (prod === l * g) result = Math.max(result, j - i + 1);
        }
    }

    return result;
};
