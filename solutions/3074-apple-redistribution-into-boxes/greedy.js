// time: O(m log m)
// space: O(1)

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
const minimumBoxes = (apple, capacity) => {
    let sum = apple.reduce((prev, cur) => prev + cur, 0);
    let count = 0;
    capacity.sort((a, b) => a - b);

    while (sum > 0) {
        sum -= capacity.pop();
        count++;
    }

    return count;
};

