// time: O(n * sqrt(v))
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minJumps = nums => {
    const n = nums.length;
    let max = 0;
    for (const num of nums) max = Math.max(max, num);

    const sieve = new Array(max + 1).fill(true);
    sieve[0] = sieve[1] = false;

    const getFactors = x => {
        const factors = [];

        for (let p = 2; p * p <= x; p++) {
            if (!sieve[p]) continue;
            if (x % p === 0) {
                factors.push(p);
                while (x % p === 0) x /= p;
            }
        }

        if (x > 1) factors.push(x);

        return factors;
    };

    for (let i = 2; i * i <= max; i++) {
        if (!sieve[i]) continue;
        for (let j = i * i; j <= max; j += i) sieve[j] = false;
    }

    const map = {};

    for (let i = 0; i < n; i++) {
        const factors = getFactors(nums[i]);

        for (const f of factors) {
            map[f] ??= [];
            map[f].push(i);
        }
    }

    const visited = new Array(n).fill(false);
    visited[0] = true;

    const queue = [[0, 0]];

    let head = 0;

    while (head < queue.length) {
        const [curr, steps] = queue[head++];

        if (curr === n - 1) return steps;

        if (curr - 1 >= 0 && !visited[curr - 1]) {
            visited[curr - 1] = true;
            queue.push([curr - 1, steps + 1]);
        }

        if (!visited[curr + 1]) {
            visited[curr + 1] = true;
            queue.push([curr + 1, steps + 1]);
        }

        const value = nums[curr];

        if (sieve[value]) {
            while (map[value].length) {
                const next = map[value].pop();

                if (!visited[next]) {
                    visited[next] = true;
                    queue.push([next, steps + 1]);
                }
            }
        }
    }

    return -1;
};

