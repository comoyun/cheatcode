// time: O()
// space: O()

/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums => {
    const stack = [];
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];

        while (stack && stack.at(-1) > curr) stack.pop();

        if (curr === 0) continue;

        if (!stack || curr !== stack.at(-1)) {
            result++;
            stack.push(curr);
        }
    }

    return result;
};

