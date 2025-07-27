// time: O(n^3)
// space: O(1)

/* WARNING: These solutions give TLE */

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
const distributeCandies = (n, limit) => {
    let count = 0;
    limit = Math.min(n, limit);
    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            for (let k = 0; k <= limit; k++) {
                const sum = i + j + k;
                if (sum === n) {
                    count++;
                    console.log(i, j, k);
                }
            }
        }
    }
    return count;
};

/*
 * @title: Optimized brute-force
 * @time: O(n^2)
 * @space: O(1)
 */
const distributeCandiesV2 = (n, limit) => {
    let count = 0;
    limit = Math.min(n, limit);
    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            const sum = i + j;
            const compliment = n - sum;
            if (compliment > limit || compliment < 0) continue;
            count++;
        }
    }
    return count;
};
