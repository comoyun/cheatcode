// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = nums => {
    const largest = new MinPriorityHeap();
    const smallest = new MaxPriorityHeap();

    for (const num of nums) {
        largest.push(num);
        if (largest.size() > 3) largest.pop();

        smallest.push(num);
        if (smallest.size() > 2) smallest.pop();
    }

    const [c, b, a] = [largest.pop(), largest.pop(), largest.pop()];
    const [y, x] = [smallest.pop(), smallest.pop()];

    return Math.max(a * b * c, a * x * y);
};
