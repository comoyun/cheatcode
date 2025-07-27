// time: O(n)
// space: O(n)

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temps => {
    const result = new Array(temps.length).fill(0);
    const stack = [];

    for (let i = temps.length - 1; i >= 0; i--) {
        while (stack.length && temps[stack.at(-1)] <= temps[i]) stack.pop();

        if (stack.length) result[i] = stack[stack.length - 1] - i;

        stack.push(i);
    }

    return result;
};
