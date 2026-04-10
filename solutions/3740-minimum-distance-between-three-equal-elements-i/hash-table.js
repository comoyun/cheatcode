// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDistance = nums => {
    const map = {};
    let result = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        map[num] ??= [];
        map[num].push(i);
        if (map[num].length > 2) {
            const [a, b, c] = map[num];
            result = Math.min(result, b - a + (c - b) + (c - a));
        }
    }

    return result === Infinity ? -1 : result;
};
