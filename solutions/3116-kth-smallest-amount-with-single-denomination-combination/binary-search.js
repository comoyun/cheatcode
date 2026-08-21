// time: O(2^n log(k * max(coins)))
// space: O(n)

/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
const findKthSmallest = (coins, k) => {
    const n = coins.length;
    let left = 1;
    let right = 10 ** 14;

    coins.sort((a, b) => a - b);

    const gcd = (a, b) => {
        while (b) [a, b] = [b, a % b];
        return a;
    };

    const count = num => {
        const dfs = (idx, len, currentLcm) => {
            if (len === 0) return Math.floor(num / currentLcm);

            let result = 0;

            for (let i = idx; i <= n - len; i++) {
                const nextLcm =
                    (currentLcm / gcd(currentLcm, coins[i])) * coins[i];

                if (nextLcm > num) continue;

                result += dfs(i + 1, len - 1, nextLcm);
            }

            return result;
        };

        let result = 0;

        for (let len = 1; len <= n; len++) {
            const current = dfs(0, len, 1);

            result += len & 1 ? current : -current;
        }

        return result;
    };

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (count(mid) >= k) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};

// Examples:
console.log(findKthSmallest([2, 3, 5, 7, 11, 13, 17, 19, 23], 334));

