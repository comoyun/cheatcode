// time: O(n * n * k * k)
// space: O(n)

/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
const maxSubarrays = (n, conflicts) => {
    const nums = Array.from({ length: n }, (_, index) => index + 1);
    let result = 0;

    for (let remove = 0; remove < conflicts.length; remove++) {
        const active = conflicts.filter((_, index) => index !== remove);
        let count = 0;

        for (let begin = 0; begin < n; begin++) {
            const set = new Set();

            for (let end = begin; end < n; end++) {
                const current = nums[end];
                set.add(current);

                let valid = true;

                for (const [first, second] of active) {
                    if (set.has(first) && set.has(second)) {
                        valid = false;
                        break;
                    }
                }

                if (valid) count++;
            }
        }

        result = Math.max(result, count);
    }

    return result;
};
