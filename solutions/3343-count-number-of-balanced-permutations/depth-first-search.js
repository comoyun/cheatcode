// time: O(n^4)
// space: O(n^3)

const MOD = 1_000_000_007n;
/**
 * @param {string} num
 * @return {number}
 */
const countBalancedPermutations = num => {
    const n = num.length;
    const cnt = Array(10).fill(0);
    let total = 0;

    for (const ch of num) {
        const d = +ch;
        cnt[d]++;
        total += d;
    }

    if (total % 2) return 0;
    const target = total / 2;
    const maxOdd = Math.floor((n + 1) / 2);

    const comb = Array.from({ length: maxOdd + 1 }, (_, i) =>
        Array.from({ length: i + 1 }, (_, j) =>
            j === 0 || j === i ? 1n : 0n
        )
    );

    for (let i = 2; i <= maxOdd; i++)
        for (let j = 1; j < i; j++)
            comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;

    const suffix = Array(11).fill(0);
    for (let i = 9; i >= 0; i--)
        suffix[i] = suffix[i + 1] + cnt[i];

    const memo = Array.from({ length: 10 }, () =>
        Array.from({ length: target + 1 }, () =>
            Array(maxOdd + 1).fill(-1n)
        )
    );

    const dfs = (d, sum, odd) => {
        if (odd < 0 || suffix[d] < odd || sum > target) return 0n;
        if (d > 9) return sum === target && odd === 0 ? 1n : 0n;
        if (memo[d][sum][odd] !== -1n) return memo[d][sum][odd];

        const even = suffix[d] - odd;
        let res = 0n;

        const minUse = Math.max(0, cnt[d] - even);
        const maxUse = Math.min(cnt[d], odd);

        for (let i = minUse; i <= maxUse; i++) {
            const e = cnt[d] - i;
            const ways = (comb[odd][i] * comb[even][e]) % MOD;
            res = (res + ways * dfs(d + 1, sum + d * i, odd - i)) % MOD;
        }

        memo[d][sum][odd] = res;
        return res;
    };

    return Number(dfs(0, 0, maxOdd));
};

