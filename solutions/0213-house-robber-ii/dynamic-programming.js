/*
 * @title: DP
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    const robLinear = houses => {
        if (houses.length === 1) return houses[0];
        let prev1 = 0,
            prev2 = 0;
        for (const house of houses) {
            const curr = Math.max(house + prev2, prev1);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    };

    return Math.max(
        robLinear(nums.slice(1)),
        robLinear(nums.slice(0, nums.length - 1))
    );
};
