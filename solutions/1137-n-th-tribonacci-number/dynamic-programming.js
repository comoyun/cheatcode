/*
 * @title: Dynamic Programming
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = n => {
    const seq = [0, 1, 1];
    for (let i = 0; i < n; i++) {
        const [a, b, c] = seq;
        seq[0] = b;
        seq[1] = c;
        seq[2] = a + b + c;
    }
    return seq[0];
};

